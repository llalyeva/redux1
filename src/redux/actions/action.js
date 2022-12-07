export default function addGoodToCart(id)
{    
    console.log("addGoodToCart is executed");
    return{
        type: "ADD_GOOD_TO_CART",
        payload:
        {
            id: id
        }
    }
}