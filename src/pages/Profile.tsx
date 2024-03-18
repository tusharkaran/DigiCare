import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { DigiProfile } from "../modules/profile/Profile";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { routesName } from "../router/RoutesList";
import { useEffect, useContext } from "react";

export const DigicareProfile = () => {
  const { isSignedIn, navigationAsPerSignedStatus, user } = useContext(
    AppContext,
  ) as ContextProps;

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.profile);
  }, [isSignedIn]);

  return (
    <DigiCareDrawer>
      <DigiProfile user={user} isEdit={true} />
    </DigiCareDrawer>
  );
};
