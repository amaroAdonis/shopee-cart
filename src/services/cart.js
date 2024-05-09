//Quais ações meu carrinho pode fazer?

//Adicionar item no carrinho

async function addItem(userCart, item) {
    userCart.push(item)

}

//deletar item do carrinho

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: 💲${result}`); 

}

//remover um item - diminui um item

async function removeItem(userCart, item) {

    //tranforma o índice visual do usuário para o indice do backend
    //const deleteIndex = index -1;

    //é maior do que zero e se é menor do que o tamanho do carrinho
    //if(index >= 0 && index < userCart.length) {
    //   userCart.splice(deleteIndex, 1)
    //}

    //encontrar o indice do item
    const indexFound = userCart.findIndex(p => p.name === item.name)
   
    //caso não encontre o item
    if(indexFound == -1){
        console.log("item não encontrado");
        return;
    }

    // item > 1 subtrair um item, item = 1 deletar o item

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }

}

//calcular o total

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1) {
        userCart.splice(index, 1)
    }
}

async function displayCart(userCart) {
    console.log("\nShopee Cart List:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity} | ${item.subtotal()}`)
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}

