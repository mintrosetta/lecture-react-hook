import { useState, useContext } from "react";
import { UserContext } from "../App";

export default function UseContextExam() {
    const user = useContext(UserContext)

    return (
        <div>
            <ChildComponent user={user} />
        </div>
    )
}

function ChildComponent({ user }) {
    const users = useContext(UserContext)
    return (
        <div>
            <h2>Child Component</h2>
            <p>Hello {users}</p>
        </div>
    );
}