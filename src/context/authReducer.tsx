import { authInitialState, AuthState } from './AuthContext';




type AuthAction = 
   | {type: 'signIn'}
   | {type: 'changeFavIcon', payload: string }
   | {type: 'singOut'}
   | {type: 'changeName', payload: string};


export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {


    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteICon: action.payload
            }
        case 'singOut':
            return {
                ...state,
                isLoggedIn: authInitialState.isLoggedIn,
                username: authInitialState.username,
                favoriteICon: authInitialState.favoriteICon
            }
        case 'changeName':
            return{
                ...state,
                username: action.payload
            }
            
    
        default:
            break;
    }



    return state;
}