import {DEFAULT_USER} from "../constants/loginConstants";

const getFromLocalStorage = (key) => {
    if (window.localStorage.getItem(key) === null) {
        setToLocalStorage(key, DEFAULT_USER);
    }
    return JSON.parse(window.localStorage.getItem(key));
}

const setToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

const deleteFromLocalStorage = (key) => {
    window.localStorage.removeItem(key);
}

export const localStorageUtil = {
    getFromLocalStorage,
    setToLocalStorage,
    deleteFromLocalStorage,
}