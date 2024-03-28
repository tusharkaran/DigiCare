import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/app";
import { ContextProps } from "../../context/interface";
import { getPatientByUsername } from "../../api/patient";
import { getDoctorByUsername } from "../../api/doctor";
import { EUserRole } from "../avatarPopOverContent/interface";

export const RoomData = ({}) => {
  const { user_role, roomId } = useParams();
  const { user, setUser } = useContext(AppContext) as ContextProps;

  useEffect(() => {
    if (user_role === EUserRole.patient) {
      getPatientByUsername(localStorage.getItem("userName")).then((res) => {
        setUser(res.data.data);
      });
    } else if (user_role === EUserRole.doctor) {
      getDoctorByUsername(localStorage.getItem("userName")).then((res) => {
        setUser(res.data.data);
      });
    }
  }, []);

  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  async function meetingUI(element) {
    const appId = 953641338;
    const ServerSecret = "49af3c2da994a62448f8b64c2aa8096b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      ServerSecret,
      roomId,
      makeid(10),
      user.name
    );
    const ui = ZegoUIKitPrebuilt.create(kitToken);
    ui.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }

  return <Grid>{user && <div ref={meetingUI}></div>}</Grid>;
};
