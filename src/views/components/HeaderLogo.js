import React from "react";
import {Link} from "react-router-dom";

export const HeaderLogo = ({ children }) => {
    return (
        <Link to="/" className="content pt-1">
            <h2 className="ui header">
                <i className="skull crossbones icon"></i>
                <div className="content logo">
                    Stratego
                </div>
            </h2>
        </Link>
    );
}
