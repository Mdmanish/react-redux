import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const HooksIceCreamContainer = (props) => {
    const numOfIceCream = useSelector(state => state.iceCreamReducer.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No of icecreams using Hooks - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Icecream</button>
        </div>
    )
}

export default HooksIceCreamContainer;
