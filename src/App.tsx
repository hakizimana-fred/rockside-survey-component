import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import Questions from './componts/Questons';
import Answers from './componts/Answers';
import PreviewTable from './componts/Preview';

function App() {
  const [survey, setSuvey] = useState<any[]>([{ survey: '' }]);
  const [answers, setAnswers] = useState<any[]>([{ answers: '' }]);
  const [surveyInput, setSurveyInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [radioChecked, setRadioChecked] = useState('');

  const addSurvey = () => {
    // quick validation
    for (let s of survey) {
      if (s.survey === '') {
        alert('Invalid');
        return false;
      }
    }
    setSuvey((prev) => [...prev, { survey: '' }]);
  };

  const addAnswers = () => {
    // quick validation
    for (let a of answers) {
      if (a.answers === '') {
        alert('Invalid');
        return false;
      }
    }

    setAnswers((prev) => [...prev, { answers: '' }]);
  };

  const handleRadioChange = (e: any) => {
    setRadioChecked(e.target.value)
  };

  const removeSurvey = (idx: number) => {
    const surveys = [...survey];
    surveys.splice(idx, 1);
    setSuvey(surveys);
  };



  const handleSurveyChange = (
    e: React.ChangeEvent<HTMLInputElement | any>,
    idx: number
  ) => {
    const { value } = e.target;
    setSurveyInput(value);
    const surveys = [...survey];
    surveys[idx]['survey'] = value;
  };

  const handleAnswersChange = (
    e: React.ChangeEvent<HTMLInputElement | any>,
    idx: number
  ) => {
    const { value } = e.target;
    setAnswerInput(value);
    const answer = [...answers];
    answer[idx]['answers'] = value;
    console.log(answers);
  };

  return (
    <div className="grid">
      {/* forms */}
      <Box className="box-one">
        <Typography variant="h5" mb={2}>
          Questions
        </Typography>
        {/*Questions */}
        <Questions
          survey={survey}
          addSurvey={addSurvey}
          handleSurveyChange={handleSurveyChange}
        />

        <Typography variant="h5" mb={2}>
          Answers
        </Typography>
        <Answers
          answers={answers}
          handleAnswersChange={handleAnswersChange}
          addAnswers={addAnswers}
        />
      </Box>

      {/* table */}
      <Box className="box-two">
        <PreviewTable
          survey={survey}
          answers={answers}
          handleRadioChange={handleRadioChange}
        />
      </Box>
    </div>
  );
}

export default App;
