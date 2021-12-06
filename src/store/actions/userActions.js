import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getUsers = () => {
    return (dispatch) => {
        axios
            .get(`${url}/users`, setHeaders())
            .then((users) => {
                dispatch({
                    type: "GET_USERS",
                    users,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const updateUser = (updatedUser, id) => {
    return (dispatch) => {
        axios
            .put(`${url}/user/${id}`, updatedUser, setHeaders())
            .then((user) => {
                dispatch({
                    type: "UPDATE_USER",
                    user,
                });
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
};


