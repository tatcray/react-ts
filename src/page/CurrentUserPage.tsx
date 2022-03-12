import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../componetns/GlobalInterface/GlobalInterface";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

interface HeplHook {
    id: string,
}

const CurrentUserPage: FC = () => {


    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<HeplHook>();
    const history = useHistory();
    useEffect(() => {
        getUser();
    }, [])

    async function getUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data)
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <button onClick={() => history.goBack()}>Назад</button>
            <h1>Вы смотрите пользователя - {user?.name}</h1>
            <h1>Его данные</h1>
            <h2>Телефон {user?.phone}</h2>
            <h2>Город проживания {user?.address.city}</h2>
            <h2>Улица проживания {user?.address.street}</h2>
            <h2>Его почта {user?.email}</h2>
        </div>
    );
};

export default CurrentUserPage;