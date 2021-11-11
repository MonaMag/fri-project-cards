import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMW from 'redux-thunk'

const rootReducer = combineReducers({
    loading: loadingReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMW))

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev
