const shoppingCart = [];

function addItemToCart(item)
{
    shoppingCart.push(item);
}

function removeItemFromCart(item)
{
    const index = shoppingCart.indexOf(item);

    if(index !== -1)
    {
        shoppingCart.splice(index, 1);
    }
}

function viewCart()
{
    if(shoppingCart.length == 0)
    {
        console.log("Seu carinho está vazio!!");
    }
    else
    {
        console.log("Há item em seu carrinho!!");
        for(let i = 0; i < shoppingCart.length; i++)
        {
            console.log(`${i + 1} - ${shoppingCart[i]}`)
        }
    }
}

function clearCart()
{
    shoppingCart.length = 0;
    console.log("Seu carrinho foi apagados")
}

addItemToCart("Tennis");
addItemToCart("Bone");
addItemToCart("Camisas");
addItemToCart("Shorts");

viewCart();

removeItemFromCart("Camisas");

viewCart();

clearCart();

viewCart();