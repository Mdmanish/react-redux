import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer (props) {
    console.log("props: ", props)
    return (
        <div>
            <h2>Number of cakes: {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCake: state.cakeReducer.numOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);