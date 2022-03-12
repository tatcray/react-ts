import React, {FC} from 'react';
import {IUser} from "../GlobalInterface/GlobalInterface";
import  "../../App.css";
import {useHistory, useParams} from "react-router-dom";

interface UserItemProps {
    user: IUser,
}


const UserItem: FC<UserItemProps> = ({user}) => {
    const currentUser = useHistory();
    return (
        <div onClick={() => currentUser.push(`/${user.id}`)} className="user">
            {user.id}.Имя пользователя {user.name} Проживает по адресу город {user.address.city} на
            улице {user.address.street}
            его номер телефона для связи {user.phone}
        </div>
    );
};

export default UserItem;