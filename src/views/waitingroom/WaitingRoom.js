import React from "react";
import { HeaderLogo } from "../components/HeaderLogo";
import { Link } from "react-router-dom";

export const WaitingRoom = () => {
    return (
        <div>
            <HeaderLogo />
            <div className="ui middle aligned vertically divided grid pt-10">
                <div className="two column row vertically-middle">
                    <div className="column">
                        <div className="ui card">
                            <div className="content">
                                <div className="header">
                                    Új játék
                                </div>
                                <div className="description">
                                    Új játékot indítottál. Ez lesz a szobád azonosítója:
                                </div>
                                <div className="ui yellow statistic">
                                    <div className="value">
                                        14844653
                                    </div>
                                    <div className="label">
                                        Szoba azonosító
                                    </div>
                                </div>
                            </div>
                            <div className="extra content">
                                <Link to="/" className="ui button">
                                    <i className="icon angle left"></i>
                                    Vissza
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column">

                    </div>
                </div>
            </div>
        </div>
    );
};