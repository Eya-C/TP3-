import "./app.css";
import React from "react"
import Carte from "./components/carte";

function app(){
    return(
        <div>
            <carte
            lastName="robinson"
            firstName="joel"
            age={53}
            hair="drak brown"
            />
            <carte
             lastName="robot"
             firstName="crow T"
             age={31}
             hair="drak brown"
            />
        </div>
    );
}
export default app;