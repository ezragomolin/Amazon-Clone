export const initialState = {
    basket: [],
    user: null
};

export const getCartTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_CART':
            const i = state.basket.findIndex(
                (basketItem) => basketItem.id == action.id
            );
            let newcart = [...state.basket];
            if(i >=0){
                newcart.splice(i, 1);
            }else{
                console.warn('Cant remove product as its not in the basket')
            }

            return{
                ...state,
                basket: newcart
            }

        case "SET_USER":
            return{
                ...state,
                user: action.user
            }


        default:
            return state;
    }

}

export default reducer