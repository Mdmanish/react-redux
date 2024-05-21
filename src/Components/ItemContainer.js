import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {

    return (
        <div>
            <h2>Item - {props.item} {props.itemType}</h2>
            <button onClick={props.buyItem}>Buy {props.itemType} item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const item = ownProps.cake ? state.cakeReducer.numOfCake : state.iceCreamReducer.numOfIceCream
    const itemType = ownProps.cake ? 'Cake' : 'Icecream'
    return {
        item: item,
        itemType: itemType
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

// export default connect(null, mapDispatchToProps)(ItemContainer)  if we don't want to use mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
