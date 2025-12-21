import axios from "axios";
import { server } from "../../server";

export const getAllOrdersOfUsers = (userId) => {
  async (dispatch) => {
    try {
      dispatch({ type: "getAllOrdersUserRequest" });
      const { data } = await axios.get(
        `${server}/order/get-all-orders/${userId}`
      );
      dispatch({ type: "getAllOrdersUserSuccess", payload: data.orders });
    } catch (error) {
      dispatch({
        type: "getAllOrderUsersFailure",
        payload: error.response.data.message,
      });
    }
  };
};

export const getAllOrdersOfShop = (shopId) => {
  async (dispatch) => {
    try {
      dispatch({ type: "getAllOrdersShopRequest" });
      const { data } = await axios.get(`${server}/order/shop-orders/${shopId}`);
      dispatch({ type: "getAllOrdersShopSuccess", payload: data.orders });
    } catch (error) {
      dispatch({
        type: "getAllOrdersShopFailure",
        payload: error.response.data.message,
      });
    }
  };
};
export const getAllAdminOrders = () => {
  async (dispatch) => {
    try {
      dispatch({ type: "getAllAdminOrdersRequest" });
      const { data } = await axios.get(`${server}/order/admin-all-orders`, {
        withCredentials: true,
      });
      dispatch({ type: "getAllAdminOrdersSuccess", payload: data.orders });
    } catch (error) {
      dispatch({
        type: "getAllAdminOrdersFailure",
        payload: error.response.data.message,
      });
    }
  };
};
