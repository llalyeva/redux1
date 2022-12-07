export default function deleteGoodFromCart(id)
{
    console.log("deleteGoodFromCart is executed");
    return{
        type: "DELETE_GOOD_FROM_CART",
        payload:
        {
            id: id
        }
    }
}