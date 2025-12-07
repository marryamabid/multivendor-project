import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";
import axios from "axios";
const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(null);
  useEffect(() => {
    const activationEmail = async () => {
      try {
        if (activation_token) {
          const res = await axios.post(`${server}/user/activation`, {
            activationToken: activation_token,
          });
          console.log(res.data);
          console.log(res.data.message);
        }
      } catch (error) {
        console.log(error.response?.data?.message || error.message);
        setError(true);
      }
    };
    activationEmail();
  }, []);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error ? (
          <p>Yor token is invalid or expired</p>
        ) : (
          <p>Your account has been activated successfully! </p>
        )}
      </div>
    </>
  );
};
export default ActivationPage;
