import { makeStyles } from "tss-react/mui";

export const useSignUpFormStye = makeStyles()(() => ({
  signUpFormGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 7rem 2rem 7rem",
    borderRadius: "1rem",
    backgroundColor: "white",
    width: "50rem"
  },
}));
