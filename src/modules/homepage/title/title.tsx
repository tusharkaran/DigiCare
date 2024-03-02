import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const DigiCareTitle = () => {
  const { t } = useTranslation();
  return (
    <Grid>
      <Typography variant="h1">{t("name.text")}</Typography>
    </Grid>
  );
};
