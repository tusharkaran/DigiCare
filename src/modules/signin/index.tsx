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
import "./style.scss";
import { useTranslation } from "react-i18next";
import { routesName } from "../../router/RoutesList";
import { AppContext } from "../../context/app";
import { ContextProps } from "../../context/interface";
import { useSignInFormStye } from "./style";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import hostpitalIcon from "../../assets/lottie/hospitalIcon.json"


export const SignInForm = () => {
  const { t } = useTranslation();
  const { classes } = useSignInFormStye();
  const { setIsSignedIn, setEmail, getAuthenticated } = React.useContext(
    AppContext,
  ) as ContextProps;
  const [email, updateEmail] = React.useState<string>();
  const [animationComplete, setAnimationComplete] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (getAuthenticated(email)) {
      setEmail(email);
      event.preventDefault();
      // const data = new FormData(event.currentTarget)
      setIsSignedIn(true);
    }
  };
  const options = {
    animationData: hostpitalIcon,
    loop: true,

  };
  const { View } = useLottie(options);

  return (
    <Grid className="signin-form-grid">
      <Container component="main" maxWidth="xs" className="signin-box">
        <CssBaseline />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          <Box className={classes.signInFormGrid}>
            <span className="sign-tile-data">
              {t("registration.signin")}
            </span>
            <div className="topicon-digicare">{View}</div>


            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate={false}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label={t("registration.form.email")}
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => updateEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={t("registration.form.password")}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t("registration.form.remember_me")}
            /> */}
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="sing-button-data"
              >
                {t("registration.signin")}
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                  {t('registration.form.forget_password')}
                </Link> */}
                </Grid>
                <Grid item>
                  <Link href={routesName.signup} variant="body2">
                    {t("registration.form.signup_message")}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </motion.div >
      </Container>
    </Grid>
  );
};
