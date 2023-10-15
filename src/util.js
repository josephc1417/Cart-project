export const getTotals = (cart) => {
    console.log('====================================');
    console.log(cart);
    console.log('====================================');
    let total = 0;
    let amount = 0;
    for (let item of cart.values()) {
        amount += item.amount;
        total += item.amount * item.price
        console.log('====================================');
        console.log(item);
        console.log('====================================');
    }
    return { total, amount };
}