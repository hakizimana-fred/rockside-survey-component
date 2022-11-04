import {
  Box,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { FC } from 'react';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const PreviewTable: FC<{
  survey: any[];
  answers: any[];
  handleRadioChange: any;
}> = ({ survey, answers, handleRadioChange }) => {
  return (
    <>
      {survey.length > 0 ? (
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {answers.map((row, idx) => (
                    <>
                      <StyledTableCell align="right">
                        {row.answers}
                      </StyledTableCell>
                    </>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {survey.map((row: any, surveyIdx: number) => {
                  return (
                    <>
                    <StyledTableRow key={row.survey}>
                      <StyledTableCell component="th" scope="row">
                        {row.survey}
                      </StyledTableCell>
                      {row.survey !== '' &&
                        answers.map((row, answerIdx) => (
                          <StyledTableCell component="th" scope="row">
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              name="radio-buttons-group"
                             >
                            <FormControlLabel
                              value={row.answers}
                              control={<Radio />}
                              onChange={handleRadioChange}
                              name="answers"
                              label=""
                            />
                            </RadioGroup>
                          </StyledTableCell>
                        ))}
                    </StyledTableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer> 
        </Box>
      ) : (
        ''
      )}
    </>
  );
};

export default PreviewTable;
