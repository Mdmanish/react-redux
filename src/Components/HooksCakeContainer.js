import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer(props) {
    const numOfCake = useSelector(state => state.cakeReducer.numOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No of cakes using Hooks - {numOfCake}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;