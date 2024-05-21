import { BUY_ICE_CREAM } from "../icecream/icecreamTypes"

const initialState = {
    numOfIceCream: 20
}

export const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - action.payload.number
        }
        default: return state
    }
}
