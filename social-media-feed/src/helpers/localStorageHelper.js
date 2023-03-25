import {loginConstants} from "../constants/loginConstants";

const getFromLocalStorage = (key) => {
    if (window.localStorage.getItem(key) === null) {
        setToLocalStorage(key, JSON.stringify(loginConstants.DEFAULT_USER));
    }
    return JSON.parse(window.localStorage.getItem(key));
}

const setToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

const deleteFromLocalStorage = (key) => {
    window.localStorage.removeItem(key);
}

export const localStorageHelper = {
    getFromLocalStorage,
    setToLocalStorage,
    deleteFromLocalStorage,
}