// Vamos a hacer una alcancia
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Save coins $${saveCoins}`);
    }
    return countCoins;
}
let MymoneyBox = moneyBox();
MymoneyBox(5);
MymoneyBox(10);