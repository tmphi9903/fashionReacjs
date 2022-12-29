
// Add items to cart
export const addCart = (product) =>{
    return {
        type: "ADDITEM",
        payload: product
    }
}

// Delete items Form cart
export const delCart = (product) =>{
    return {
        type: "DELITEM",
        payload: product
    }
}