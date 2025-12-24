import axios from "axios";
import { server } from "../../server";
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const loadShop = () => async (dispatch) => {
  try {
    dispatch({ type: "loadShopRequest" });
    const { data } = await axios.get(`${server}/shop/getshop`, {
      withCredentials: true,
    });
    dispatch({ type: "loadShopSuccess", payload: data.shop });
  } catch (error) {
    dispatch({
      type: "loadShopFailure",
      payload: error.response?.data?.message || error.message,
    });
  }
};
