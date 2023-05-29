import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function createData(data, cafe1, cafe2, cafe3, almoco1, almoco2, almoco3, cafedatarde1, cafedatarde2, cafedatarde3, janta1, janta2, janta3, observacoes) {
  return { data, cafe1, cafe2, cafe3, almoco1, almoco2, almoco3, cafedatarde1, cafedatarde2, cafedatarde3, janta1, janta2, janta3, observacoes };
}

const rows = [
  createData(1),
  createData(2),
  createData(3),
  createData(4),
  createData(5),
  createData(6),
  createData(7),
  createData(8),
  createData(9),
  createData(10),
  createData(11),
  createData(12),
  createData(13),
  createData(14),
  createData(15),
  createData(16),
  createData(17),
  createData(18),
  createData(19),
  createData(20),
  createData(21),
  createData(22),
  createData(23),
  createData(24),
  createData(25),
  createData(26),
  createData(27),
  createData(28),
  createData(29),
  createData(30),
  createData(31),
];

export default function DenseTable() {
  const [cafe1Inputs, setCafe1Inputs] = React.useState(rows.map(row => row.cafe1));
  const [cafe2Inputs, setCafe2Inputs] = React.useState(rows.map(row => row.cafe2));
  const [cafe3Inputs, setCafe3Inputs] = React.useState(rows.map(row => row.cafe3));
  const [almoco1Inputs, setAlmoco1Inputs] = React.useState(rows.map(row => row.almoco1));
  const [almoco2Inputs, setAlmoco2Inputs] = React.useState(rows.map(row => row.almoco2));
  const [almoco3Inputs, setAlmoco3Inputs] = React.useState(rows.map(row => row.almoco3));
  const [cafedatarde1Inputs, setCafedatarde1Inputs] = React.useState(rows.map(row => row.cafedatarde1));
  const [cafedatarde2Inputs, setCafedatarde2Inputs] = React.useState(rows.map(row => row.cafedatarde2));
  const [cafedatarde3Inputs, setCafedatarde3Inputs] = React.useState(rows.map(row => row.cafedatarde3));
  const [janta1Inputs, setJanta1Inputs] = React.useState(rows.map(row => row.janta1));
  const [janta2Inputs, setJanta2Inputs] = React.useState(rows.map(row => row.janta2));
  const [janta3Inputs, setJanta3Inputs] = React.useState(rows.map(row => row.janta3));
  const [observacoesInputs, setObservacoesInputs] = React.useState(rows.map(row => row.observacoes));

  const handleCafe1Change = (event, index) => {
    const newInputs = [...cafe1Inputs];
    newInputs[index] = event.target.value;
    setCafe1Inputs(newInputs);
  };

  const handleCafe2Change = (event, index) => {
    const newInputs = [...cafe2Inputs];
    newInputs[index] = event.target.value;
    setCafe2Inputs(newInputs);
  };

  const handleCafe3Change = (event, index) => {
    const newInputs = [...cafe3Inputs];
    newInputs[index] = event.target.value;
    setCafe3Inputs(newInputs);
  };

  const handleAlmoco1Change = (event, index) => {
    const newInputs = [...almoco1Inputs];
    newInputs[index] = event.target.value;
    setAlmoco1Inputs(newInputs);
  };

  const handleAlmoco2Change = (event, index) => {
    const newInputs = [...almoco2Inputs];
    newInputs[index] = event.target.value;
    setAlmoco2Inputs(newInputs);
  };

  const handleAlmoco3Change = (event, index) => {
    const newInputs = [...almoco3Inputs];
    newInputs[index] = event.target.value;
    setAlmoco3Inputs(newInputs);
  };

  const handleCafedatarde1Change = (event, index) => {
    const newInputs = [...cafedatarde1Inputs];
    newInputs[index] = event.target.value;
    setCafedatarde1Inputs(newInputs);
  };

  const handleCafedatarde2Change = (event, index) => {
    const newInputs = [...cafedatarde2Inputs];
    newInputs[index] = event.target.value;
    setCafedatarde2Inputs(newInputs);
  };

  const handleCafedatarde3Change = (event, index) => {
    const newInputs = [...cafedatarde3Inputs];
    newInputs[index] = event.target.value;
    setCafedatarde3Inputs(newInputs);
  };

  const handleJanta1Change = (event, index) => {
    const newInputs = [...janta1Inputs];
    newInputs[index] = event.target.value;
    setJanta1Inputs(newInputs);
  };

  const handleJanta2Change = (event, index) => {
    const newInputs = [...janta2Inputs];
    newInputs[index] = event.target.value;
    setJanta2Inputs(newInputs);
  };

  const handleJanta3Change = (event, index) => {
    const newInputs = [...janta3Inputs];
    newInputs[index] = event.target.value;
    setJanta3Inputs(newInputs);
  };

  const handleObservacoesChange = (event, index) => {
    const newInputs = [...observacoesInputs];
    newInputs[index] = event.target.value;
    setObservacoesInputs(newInputs);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '1%' }} align="center">DATA</TableCell>
            <TableCell sx={{ width: '10%' }} align="center" colSpan={3}>
              <b>Café da Manhã</b>
            </TableCell>
            <TableCell sx={{ width: '10%' }} align="center" colSpan={3}>
              <b>Almoço</b>
            </TableCell>
            <TableCell sx={{ width: '10%' }} align="center" colSpan={3}>
              <b>Café da Tarde</b>
            </TableCell>
            <TableCell sx={{ width: '10%' }} align="center" colSpan={3}>
              <b>Janta</b>
            </TableCell>
            <TableCell sx={{ width: '10%' }} align="center">OBSERVAÇÕES</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ width: '1%' }} align="center"></TableCell>
            <TableCell sx={{ width: '5%' }} align="center">Jejum</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">2 HR Depois</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">UI Insulina</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">Antes</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">2 HR Depois</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">UI Insulina</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">Antes</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">2 HR Depois</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">UI Insulina</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">Antes</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">2 HR Depois</TableCell>
            <TableCell sx={{ width: '5%' }} align="center">UI Insulina</TableCell>
            <TableCell sx={{ width: '5%' }} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.data}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.data}
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={cafe1Inputs[index]}
                  onChange={(event) => handleCafe1Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={cafe2Inputs[index]}
                  onChange={(event) => handleCafe2Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={cafe3Inputs[index]}
                  onChange={(event) => handleCafe3Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={almoco1Inputs[index]}
                  onChange={(event) => handleAlmoco1Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={almoco2Inputs[index]}
                  onChange={(event) => handleAlmoco2Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={almoco3Inputs[index]}
                  onChange={(event) => handleAlmoco3Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={cafedatarde1Inputs[index]}
                  onChange={(event) => handleCafedatarde1Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={cafedatarde2Inputs[index]}
                  onChange={(event) => handleCafedatarde2Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={cafedatarde3Inputs[index]}
                  onChange={(event) => handleCafedatarde3Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={janta1Inputs[index]}
                  onChange={(event) => handleJanta1Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={janta2Inputs[index]}
                  onChange={(event) => handleJanta2Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={janta3Inputs[index]}
                  onChange={(event) => handleJanta3Change(event, index)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={observacoesInputs[index]}
                  onChange={(event) => handleObservacoesChange(event, index)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
