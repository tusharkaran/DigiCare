import { ILoginUser } from "../../context/interface";

export interface ProfileProps {
  user: ILoginUser;
  isEdit?: boolean;
}
