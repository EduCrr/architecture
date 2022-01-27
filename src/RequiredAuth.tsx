import { Navigate } from "react-router-dom";
import { useSelectorApp } from "./redux/hooks/userSelectorApp";
type Props = {
  children: JSX.Element;
};
export const RequiredAuth = ({ children }: Props) => {
  const user = useSelectorApp((state) => state.user);
  if (user.uid !== "") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
