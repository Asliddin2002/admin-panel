import {createContext, useReducer} from 'react'
import {reducer} from './Reducer'

const initialState = {
    darkmode: false
}

export const Context = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{darkmode:state.darkmode, dispatch  }}>
            {children}
        </Context.Provider>)

}
