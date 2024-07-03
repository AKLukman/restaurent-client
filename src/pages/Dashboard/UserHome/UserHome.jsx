import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <h2 className="text-2xl">
      <span>Hi welcome </span> {user?.displayName ? user?.displayName : "Back"}
    </h2>
  );
};

export default UserHome;
