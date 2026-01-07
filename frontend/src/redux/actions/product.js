import axios from "axios";
import { server } from "../../server";

export const createproduct = (FormData) => async (dispatch) => {
  try {
    dispatch({ type: "createProductRequest" });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${server}/product/create-product`,
      FormData,
      config
    );
    dispatch({ type: "productCreatedSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "productCreatedFail",
      payload: error.response.data.message,
    });
  }
};
