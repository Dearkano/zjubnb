import { getLocalStorage, setLocalStorage } from './storage';
export const buy = (fee: number) => {
    const money = getLocalStorage('wallet');
    money.current = money.current - fee;
    setLocalStorage('wallet', money);
}
export const getMoney = () => {
    const money = getLocalStorage('wallet');
    return money.current;
}
export const init = () => {
    setLocalStorage('wallet',{current:10000});
}