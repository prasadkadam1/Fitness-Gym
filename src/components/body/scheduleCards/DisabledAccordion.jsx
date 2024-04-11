
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScheduleCard from '../ScheduleCard';
// import ScheduleCard from './../ScheduleCard';

export default function DisabledAccordion() {
  return (
    <div >
      <Accordion sx={{ bgcolor: "black", color: "white", border: "1px solid #212121", width: "82.7vw" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>MONDAY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <ScheduleCard></ScheduleCard>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "black", color: "white", border: "1px solid #212121", width: "82.7vw" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>TUESDAY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <ScheduleCard></ScheduleCard>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "black", color: "white", border: "1px solid #212121", width: "82.7vw" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>WEDNESDAY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <ScheduleCard></ScheduleCard>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "black", color: "white", border: "1px solid #212121", width: "82.7vw" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>THUSDAY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <ScheduleCard></ScheduleCard>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "black", color: "white", border: "1px solid #212121", width: "82.7vw" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>FRIDAY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <ScheduleCard></ScheduleCard>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "black", color: "white", border: "1px solid #212121", width: "82.7vw" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>SATURDAY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <ScheduleCard></ScheduleCard>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Sunday</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
