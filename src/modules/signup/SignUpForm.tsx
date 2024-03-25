import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { routesName } from "../../router/RoutesList";
import { useSignUpFormStye } from "./style";
import { AppContext } from "../../context/app";
import { ContextProps } from "../../context/interface";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import hostpitalIcon from "../../assets/lottie/hospitalIcon.json"

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const SignUpForm = () => {
  const { t } = useTranslation();
  const { classes } = useSignUpFormStye();
  const { setIsSignedIn } = React.useContext(AppContext) as ContextProps;
  const [animationComplete, setAnimationComplete] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget)
    setIsSignedIn(true);
  };
  const options = {
    animationData: hostpitalIcon,
    loop: true,

  };
  const { View } = useLottie(options);

  return (
    <Grid className="signup-form-grid">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        onAnimationComplete={() => setAnimationComplete(true)}
      >
        <Container component="main" maxWidth="xs" className="signin-box">
          <CssBaseline />
          <Box className={classes.signUpFormGrid}>
            <span className="sign-tile-data">
              {t("registration.signup")}
            </span>
            <div className="topicon-digicare">{View}</div>


            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label={t("registration.form.name.first")}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label={t("registration.form.name.last")}
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label={t("registration.form.email")}
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label={t("registration.form.password")}
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label={t('registration.form.promotion_permission_text')}
                />
              </Grid> */}
              </Grid>
              <Button
                type="submit"
                className="sing-button-data"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {t("registration.signup")}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href={routesName.signin} variant="body2">
                    {t("registration.form.already_account")}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </motion.div>
    </Grid>
  );
};
