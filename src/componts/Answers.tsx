import { Grid, TextField, Box, Button } from '@mui/material';
import { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  answers: any[];
  handleAnswersChange: (
    e: React.ChangeEvent<HTMLInputElement | any>,
    idx: number
  ) => void;
  addAnswers: any;
};

const Answers: FC<Props> = ({ handleAnswersChange, answers, addAnswers }) => {
  return (
    <Box className="flex-form questions">
      <form>
        <Grid container direction="column">
          {answers.length > 0 &&
            answers.map((el: any, idx: any) => {
              return (
                <>
                  <Box style={{ marginTop: '10px' }}>
                    <TextField
                      style={{ marginBottom: 10 }}
                      onChange={(e) => handleAnswersChange(e, idx)}
                      placeholder="Label"
                    />
                  </Box>
                  <Box>
                    {answers.length - 1 === idx && (
                      <Button
                        onClick={addAnswers}
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
          {answers.length > 0 &&
            answers.map((el: any, idx: any) => {
              let modified = '';
              let str = el.answers.replace(/\s/g, '');
              modified = str.charAt(0).toLowerCase() + str.slice(1);
              return (
                <div>
                  <TextField
                    style={{ marginBottom: 10 }}
                    value={modified}
                    placeholder="Value"
                  />

                  {answers.length - 1 === idx && <Button> </Button>}
                </div>
              );
            })}
        </Grid>
      </form>
    </Box>
  );
};

export default Answers;
