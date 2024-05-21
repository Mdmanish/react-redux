import React, {useState} from "react";
import { connect } from "react-redux";
// import { buyIceCream } from "../redux/cake/iceCreamAction";
import { buyIceCream } from "../redux";


function IceCreamContainer (props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of icecreams: {props.numOfIceCream}</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyIceCream(number)}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCreamReducer.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: (number) => dispatch(buyIceCream(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);
