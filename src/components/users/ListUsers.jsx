import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Todo from "./Todo";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { getUsers } from "../../store/actions/userActions";

const useStyles = makeStyles({
    todosStyle: {
        margin: "20px auto",
        padding: "20px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000",
    },
});

const ListUsers = () => {
    const auth= useSelector((state) => state.auth);
    const users = useSelector((state) => state.users);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [user._id, dispatch]);

    if (!auth._id) return <Redirect to="/signin" />;

    return (
        <>
            <div className={classes.todosStyle}>
                <Typography variant="h5">
                    {" "}
                    {todos.length > 0 ? "theTodos;" : "noTodosYet;"}{" "}
                </Typography>
                {todos &&
                todos.map((todo) => {
                    return (
                        <Todo
                            todo={todo}
                            key={todo._id}
                            setTodo={setTodo}
                            todos={todos}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ListUsers;
