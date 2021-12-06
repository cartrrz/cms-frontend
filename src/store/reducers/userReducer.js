import { toast } from "react-toastify";

const userReducer = (users = [], action) => {
    switch (action.type) {
        case "GET_USERS":
            return action.users.data;
        case "UPDATE_USER":
            toast.success("Un usuario fue actualizado...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return users.map((user) =>
                user._id === action.user.data._id ? action.todo.user : user
            );
        case "CLEAR_TODOS":
            return [];
        default:
            return users;
    }
};

export default userReducer;
