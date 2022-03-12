import React, {FC} from 'react';
import {IUser} from "../componetns/GlobalInterface/GlobalInterface";
import UserItem from "../componetns/componentsPage/UserItem";

interface UserListProps {
    users: IUser[]
}

const UserPage: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                        <UserItem user={user}/>
                </div>
            )}
        </div>
    );
};

export default UserPage;