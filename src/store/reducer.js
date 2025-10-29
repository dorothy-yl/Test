import { combineReducers } from "redux"

function findGoods(arr = [], goods = {}) {
    if (!goods) {
        return -1;
    }
    return arr.findIndex((item) => {
        if (goods.id !== undefined && item.id !== undefined) {
            return item.id === goods.id;
        }
        return item.name === goods.name;
    });
}

function reducer(state = [], action) {
    switch (action.type) {
        case "addGoods": {
            const goods = action.goods;
            if (!goods) {
                return state;
            }
            const index = findGoods(state, goods);
            if (index !== -1) {
                return state;
            }
            return [...state, goods];
        }
        case "removeGoods": {
            const goods = action.goods;
            if (!goods) {
                return state;
            }
            const index = findGoods(state, goods);
            if (index === -1) {
                return state;
            }
            const next = [...state];
            next.splice(index, 1);
            return next;
        }
        default:
            return state;
    }
}
function reducer2(state = 0, action) {
    switch (action.type) {
        case "add":

            return state++;
        case "minus":

            return state--;
        default:
            return state;
    }
}

export default combineReducers({ reducer, reducer2 })