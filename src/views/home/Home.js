import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <div className="ui middle aligned vertically divided grid pt-10">
                <div className="two column row">
                    <div className="column">
                        <div className="ui card">
                            <div className="content">
                                <div className="header">Játék Lehetőségek</div>
                            </div>
                            <div className="content">
                                <Link to="/waitingroom" className="ui button">
                                    <i className="icon dice"></i>
                                    Új játék
                                </Link>
                            </div>
                            <div className="extra content">
                                <div className="ui input">
                                    <input type="number" placeholder="Szobaszám..." />
                                </div>
                                <Link to="/preparingroom" className="ui button">
                                    <i className="icon user friends"></i>
                                    Csatlakozás
                                </Link>
                            </div>
                            <div className="content">
                                <div className="summary">
                                    <Link to="/gamerules">Játékszabály</Link> elolvasása
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <h2 className="ui header logo-header">
                            <i className="skull crossbones icon"></i>
                            <div className="content logo">
                                Stratego
                                <div className="sub header">Szerezd meg a zászlót!</div>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};