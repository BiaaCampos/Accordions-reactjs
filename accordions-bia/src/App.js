import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DenseTable from './Table.js'; // Importe o componente da tabela
import { Button } from '@mui/material';
import ButtonSalvar from './Button.js';
import "../src/App.css";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DenseTable /> {/* Adicione o componente da tabela aqui */}
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      {/* Repita o mesmo padrão para os outros Accordions */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='accordion'>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DenseTable />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Accordions 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DenseTable />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
