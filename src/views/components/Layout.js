import React from "react";

export const Layout = ({ children }) => {
    return (
        <div className="bg-img">
            <div className="ui container padded ">
                {children}
            </div>
        </div>
    );
};
