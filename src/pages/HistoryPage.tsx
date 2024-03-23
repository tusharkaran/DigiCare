import "./style.scss";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { History } from "../modules/history";

const HistoryPage = () => {
  return (
    <DigiCareDrawer>
      <History />
    </DigiCareDrawer>
  );
};

export default HistoryPage;
