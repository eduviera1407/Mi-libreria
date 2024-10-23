import React from "react";

import MyFavourite, { myfavourite } from "../myfavourite";


function Example(props: myfavourite) {
    return (
        <MyFavourite
            color={props.color}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    );
}

export default Example;
