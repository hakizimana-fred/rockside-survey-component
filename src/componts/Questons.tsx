import { Grid, TextField, Box, Button, Typography } from '@mui/material';

import React, { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  survey: any[];
  handleSurveyChange: (
    e: React.ChangeEvent<HTMLInputElement | any>,
    idx: number
  ) => void;
  addSurvey: any;
};

const Questions: FC<Props> = ({ survey, handleSurveyChange, addSurvey }) => {
  return (
    <Box className="flex-form questions">
      <form>
        <Grid container direction="column">
          {survey.length > 0 &&
            survey.map((el: any, idx: any) => {
              return (
                <>
                  <Box>
                    <TextField
                      style={{ marginBottom: 10 }}
                      onChange={(e) => handleSurveyChange(e, idx)}
                      placeholder="Label"
                    />
                  </Box>
                  <Box>
                    {survey.length - 1 === idx && (
                      <Button
                        onClick={addSurvey}
                        variant="contained"
                        color="primary"
                      >
                        <AddIcon />
                        Add
                      </Button>
                    )}
                  </Box>
                </>
              );
            })}
        </Grid>
      </form>

      <form style={{ marginTop: '-30px' }}>
        <Grid container direction="column">
          {survey.length > 0 &&
            survey.map((el: any, idx: any) => {
              let modified = '';
              let str = el.survey.replace(/\s/g, '');
              modified = str.charAt(0).toLowerCase() + str.slice(1);
              return (
                <div>
                  <TextField
                    style={{ marginBottom: 10 }}
                    value={modified}
                    placeholder="Value"
                  />

                  {survey.length - 1 === idx && <Button> </Button>}
                </div>
              );
            })}
        </Grid>
      </form>
    </Box>
  );
};

export default Questions;
