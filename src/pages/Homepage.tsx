import { Grid } from "@mui/material";
import "./style.scss";
import { routesName } from "../router/RoutesList";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { DigiCareTitle } from "../modules/homepage/title/title";

export const Homepage = () => {
  const { navigationAsPerSignedStatus } = useContext(
    AppContext
  ) as ContextProps;

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.dashboard);
  }, []);

  return (
    <Grid className="homepage-background">
      <DigiCareTitle />
    </Grid>
  );
};
