import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const axiosPublice = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublice.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div>
        <div className="divider"></div>
        <button onClick={handleGoogleLogin} className="btn ">
          <FcGoogle className="text-xl mr-2" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
