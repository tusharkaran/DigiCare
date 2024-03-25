// History component
import Typography from "@mui/material/Typography";
import {
  DigicareAccordion,
  DigicareAccordionDetails,
  DigicareAccordionSummary,
} from "../common/components/DigicareAccordian";
import React from "react";
import { historyData } from "../../dummyData/histroy";
import { IDigicareHistory } from "./interface";
import { capitalizeSentence } from "../common/helper/string";
import "./style.scss";

export const History = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="history-container">
      {historyData.map((data: IDigicareHistory) => {
        return (
          <DigicareAccordion
            expanded={expanded === data._id}
            onChange={handleChange(data._id)}
            key={data._id}
          >
            <DigicareAccordionSummary
              aria-controls={`${data._id}-content`}
              id={`${data._id}-header`}
            >
              <Typography className="summary-accoidian-heading">{data.timestamp.toLocaleString()}</Typography>
            </DigicareAccordionSummary>
            <DigicareAccordionDetails>
              <div className="history-record-text-wrapper">
                {data.record.map((readings, index) => (
                  <Typography variant="body1" key={index} className="body-data-accordian" >
                    <span className="history-record-text-title">
                      {capitalizeSentence(readings.name.split("_").join(" "))}:
                    </span>{" "}
                    {readings.reading}
                    {readings.unit}
                  </Typography>
                ))}
              </div>
            </DigicareAccordionDetails>
          </DigicareAccordion>
        );
      })}
    </div>
  );
};
