import React, { useState } from "react";
import { ContextProps } from "./interface";
import { useNavigate } from "react-router-dom";
import { routesName } from "../router/RoutesList";

export const AppContext = React.createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(true);
  const navigate = useNavigate();

  const navigationAsPerSignedStatus = (requestedPage: string) => {
    if (isSignedIn) {
      navigate(requestedPage);
    } else {
    navigate(routesName.dashboard);
    }
  };

  return (
    <AppContext.Provider
      value={{ isSignedIn, setIsSignedIn, navigationAsPerSignedStatus }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
