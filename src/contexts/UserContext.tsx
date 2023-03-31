import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { UserReducer } from "../reducers/User/reducer";
import { addUserAddressInfoAction, 
         changeNumberAddressUser, 
         changeComplementAddressUser } from '../reducers/User/actions';
import { IUserInfo } from "../interfaces/IUser";

interface userContextType {
    userAddress: IUserInfo,
    numberAddress: number,
    handleAddAddressUser: (user: IUserInfo) => void,
    handleChangeNumberAddress: (num: number) => void,
    handleChangeComplementAddress: (complement: string) => void;
}

interface userContextProviderProps {
    children: ReactNode
}

export const UserContext = createContext({} as userContextType);

export function UserContextProvider({ children }: userContextProviderProps) {
    const [userState, dispatch] = useReducer(UserReducer, 
        {
            userAddress: {},
            numberAddress: 0,
            complementUser: ''
        },
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem('@coffee-delivery:user-state-1.0.0');
            if(storedStateAsJSON) return JSON.parse(storedStateAsJSON);
            return initialState;
        },
    );

    useEffect(() => {
        const stateJSON = JSON.stringify(userState);
        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
    }, [userState]);

    const { userAddress, numberAddress } = userState;

    function handleAddAddressUser(data: IUserInfo) {
        const InfoAddress = { ...data }
        dispatch(addUserAddressInfoAction(InfoAddress))
    }

    function handleChangeNumberAddress(num: number) {
        dispatch(changeNumberAddressUser(num));
    }

    function handleChangeComplementAddress(complement: string) {
        dispatch(changeComplementAddressUser(complement));
    }

    return (
        <UserContext.Provider value={{
            userAddress,
            numberAddress,
            handleAddAddressUser,
            handleChangeNumberAddress,
            handleChangeComplementAddress
         }}>
            { children }
        </UserContext.Provider>
    );
}