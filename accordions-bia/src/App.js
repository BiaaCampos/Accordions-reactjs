import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DenseTable from './Table.js';
// import { Button } from '@mui/material';
import ButtonSalvar from './Button.js';
import "../src/App.css";
import CheckListRapida from "../src/CheckListRapida.js"
import ReceitaInsulinaBasal from '../src/ReceitaInsulinaBasal.js';
import ReceitaInsulinaRapida from './ReceitaInsulinaRapida.js';
import RelatorioManutencaoInsulina from './RelatorioManutencaoInsulina.js';
import RelatorioPrescricaoInicialInsulina from './RelatorioPrescricaoInicialInsulina.js';
import TermoConflitos from './TermoConflito.js';
import FormularioMedicina from './FormularioMedico.js';
import Admin from './Admin.js';


export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Controle Glicemia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DenseTable />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='accordion'>Receita Insulina Basal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReceitaInsulinaBasal />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Check List Rápida</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckListRapida />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Receita Insulina Rápida</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReceitaInsulinaRapida />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Relatório Manutenção de Insulina</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RelatorioManutencaoInsulina />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Relatório Prescrição Inicial Insulina</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RelatorioPrescricaoInicialInsulina />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Termo de Conflito</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TermoConflitos />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Formulário Medicina</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormularioMedicina />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Teste</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Admin />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
