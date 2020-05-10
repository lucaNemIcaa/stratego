import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import { Layout } from "./components/Layout";

import { Home } from "./home/Home";
import { GameRules } from "./home/GameRules";
import { WaitingRoom } from "./waitingroom/WaitingRoom";
import { PreparingRoom } from "./preparingroom/PreparingRoom";
import { GameRoom } from "./gameroom/GameRoom";


export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/gamerules">
                            <GameRules/>
                        </Route>
                        <Route path="/waitingroom">
                            <WaitingRoom />
                        </Route>
                        <Route path="/preparingroom">
                            <PreparingRoom />
                        </Route>
                        <Route path="/gameroom">
                            <GameRoom />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}
