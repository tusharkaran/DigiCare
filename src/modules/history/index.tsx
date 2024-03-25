// History component
import Typography from "@mui/material/Typography";
import {
  DigicareAccordion,
  DigicareAccordionDetails,
  DigicareAccordionSummary,
} from "../common/components/DigicareAccordian";
import React, { useEffect, useState } from "react";
import { HistoryProps } from "./interface";
import { capitalizeSentence } from "../common/helper/string";
import "./style.scss";
import { getAllRealTimeData } from "../../api/patient";
import { RealTimeDataProps } from "../homepage/realTimeCards/interface";
import { digicareConfig } from "../../assets/constants/config";
import { DigicareSnackbar } from "../common/components/DigiSnackbar";

export const History = ({ username }: HistoryProps) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const [history, setHistory] = useState<RealTimeDataProps[]>();
  const [apiErrorMessage, setApiErrorMessage] = useState<string>();

  useEffect(() => {
    getAllRealTimeData(username)
      .then((res) => setHistory(res.data.data))
      .catch(() => {
        setApiErrorMessage("No history recorded for this user");
      });
  }, []);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClose = () => {
    setApiErrorMessage(undefined);
  };

  return (
    <>
      {history?.map((data: RealTimeDataProps) => {
        return (
          <DigicareAccordion
            expanded={expanded === data.record_id}
            onChange={handleChange(data.record_id)}
          >
            <DigicareAccordionSummary
              aria-controls={`${data.record_id}-content`}
              id={`${data.record_id}-header`}
            >
              <Typography className="summary-accoidian-heading">{data.timestamp.toLocaleString()}</Typography>
            </DigicareAccordionSummary>
            <DigicareAccordionDetails>
              <Typography className="history-record-text-wrapper">
                {Object.keys(data)?.map((readings) => {
                  if (
                    Object.keys(digicareConfig.realtimeUnits).includes(readings)
                  ) {
                    return (
                      <Typography variant="body1">
                        <span className="history-record-text-title">
                          {capitalizeSentence(readings.split("_").join(" "))}:
                        </span>{" "}
                        {data[readings]}
                        {digicareConfig.realtimeUnits[readings].unit}
                      </Typography>
                    );
                  }
                })}
              </Typography>
            </DigicareAccordionDetails>
          </DigicareAccordion>
        );
      })}
      <DigicareSnackbar
        message={apiErrorMessage}
        autoHideDuration={6000}
        color="error"
        variant="filled"
        handleClose={handleClose}
      />
    </>
  );
};
