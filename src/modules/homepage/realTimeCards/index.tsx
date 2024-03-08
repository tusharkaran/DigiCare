import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { realTimeData } from "../../../dummyData/realTimeData";
import { Grid } from "@mui/material";
import { digicareConfig } from "../../../assets/constants/config";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { capitalizeSentence } from "../../common/helper/string";
import DigicareAlertDialog from "../../common/components/DigiCareDialogueBox";
import { RealTimeDataProps } from "./interface";

export const RealTimeCards = () => {
  const { t } = useTranslation();
  const [isAlertOpen, setIsAlertOpen] = React.useState<boolean>(false);

  const validateData = (data: RealTimeDataProps) => {
    const dataMinMax = data.reading.split('/');
    if (dataMinMax.length === 1) {
      if (Number(dataMinMax) > Number(data.min_value) && Number(dataMinMax) < Number(data.max_value)) {
        return "valid-real-time-data"
      }
      else {
        return "invalid-real-time-data"
      }
    }
    else {
      if(Number(dataMinMax[0]) > Number(data.min_value) && Number(dataMinMax[1]) < Number(data.max_value)) {
        return "valid-real-time-data"
      }
      else {
        return "invalid-real-time-data"
      }
    }
  }

  return (
    <Grid className="real-time-data-grid">
      {realTimeData?.map((data: RealTimeDataProps) => {
        const validateClassName = validateData(data);
        return (
          <Card className="real-time-card-grid">
            {digicareConfig.showRealTimeDataImage && (
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={data.img}
              />
            )}
            <CardContent>
              <Typography className={validateClassName} gutterBottom variant="h4" component="div">
                {data.reading ? data.reading : digicareConfig.defaultReading}{" "}
                {data.unit}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {t(capitalizeSentence(data.name.split("_").join(" ")))}
              </Typography>
            </CardContent>
            <CardActions className="real-time-card-action">
              <Button size="medium" onClick={() => setIsAlertOpen(true)}>
                {t("real_time_dashboard.record.name")}
              </Button>
            </CardActions>
          </Card>
        );
      })}
      {isAlertOpen && (
        <DigicareAlertDialog
          isOpen={isAlertOpen}
          handleClose={() => setIsAlertOpen(false)}
          title={t("real_time_dashboard.record.alert.title")}
          okButtonText={t("real_time_dashboard.record.alert.okButtonTitle")}
          content={t("real_time_dashboard.record.alert.content")}
        />
      )}
    </Grid>
  );
};
