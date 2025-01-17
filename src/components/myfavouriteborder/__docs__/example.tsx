import React from "react";

import MyFavouriteBorder, { myfavouriteborder } from "../myfavouriteborder";


function Example(props: myfavouriteborder) {
    return (
        <MyFavouriteBorder
            color={props.color}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    );
}

export default Example;
