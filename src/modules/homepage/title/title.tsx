import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import './title.scss';

export const DigiCareTitle = () => {
  const { t } = useTranslation();
  return (
      <Typography className="digicare-nav-title">{t("name.text")}</Typography>
  );
};
