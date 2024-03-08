import React, { useState } from "react";
import { ContextProps } from "./interface";
import { useNavigate } from "react-router-dom";
import { routesName } from "../router/RoutesList";

export const AppContext = React.createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(true);
  const [role, setRole] = useState<string>("patient");
  const [patientId, setPatientId] = useState<string | null | undefined>("1");

  const navigate = useNavigate();

  const navigationAsPerSignedStatus = (requestedPage: string) => {
    if (isSignedIn) {
      if (
        requestedPage === routesName.signin ||
        requestedPage === routesName.signup
      )
        navigate(routesName.dashboard);
      else navigate(requestedPage);
    } else {
      navigate(routesName.signin);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        patientId,
        setPatientId,
        role,
        setRole,
        navigationAsPerSignedStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
