import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import CurrentUserPage from "./page/CurrentUserPage";
import UsersData from "./page/UsersData";


const App = () => {
    return (
        <BrowserRouter>
                <Route exact path={"/"}>
                    <UsersData/>
                </Route>
                <Route path={"/:id"}>
                    <CurrentUserPage/>
                </Route>

        </BrowserRouter>
    );
};

export default App;