import React, {useEffect, useState} from 'react';
import UserPage from "./UserPage";
import {IUser} from "../componetns/GlobalInterface/GlobalInterface";
import axios from "axios";

const UsersData = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers();
    }, [])

    async function getUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <UserPage users={users}/>
        </div>
    );
};

export default UsersData;