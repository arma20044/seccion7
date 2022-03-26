
import React, { useReducer } from 'react'

import { createContext } from "react";
import { authReducer } from './authReducer';



// Definir la informacion
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteICon?: string;
}


// Estado inicial
export const authInitialState: AuthState = {
        isLoggedIn: false,
        username: undefined,
        favoriteICon: undefined
}


//interfasce React del Context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    singOut: () => void;
    changeName:(userName: string) => void;
}


// crear contexto
export const AuthContext = createContext( {} as AuthContextProps );


// Componente proveedor del estado
export const AuthProvider = ( { children}: any ) => {

    const [authState, dispatch] = useReducer( authReducer , authInitialState)


    const signIn = () => {
        dispatch( { type: 'signIn' });
    }

    const changeFavoriteIcon = ( iconName: string) => {
            dispatch({ type: 'changeFavIcon', payload: iconName})
    }

    const singOut = () => {
        dispatch( {type: 'singOut'});
    }

    const changeName = ( userName: string) => {
        dispatch( {type: 'changeName',payload: userName})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            singOut,
            changeName
        }}>

            {children}

        </AuthContext.Provider>
    )
}