import Signup from "../components/Signup/Signup.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log(isAuthenticated);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <>
      <div>
        <Signup />
      </div>
    </>
  );
};
export default SignupPage;
