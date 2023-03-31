import { IUserInfo } from '../../interfaces/IUser';

export enum ActionTypesUser {
    ADD_USER_INFO = 'ADD_USER_INFO',
	CHANGE_NUMBER_ADDRESS_USER = 'CHANGE_NUMBER_ADDRESS_USER',
	CHANGE_COMPLEMENT_ADDRESS_USER = 'CHANGE_COMPLEMENT_ADDRESS_USER'
}

export function addUserAddressInfoAction(userInfo: IUserInfo) {
	return {
		type: ActionTypesUser.ADD_USER_INFO,
		payload: {
			userInfo,
		}
	}
}

export function changeNumberAddressUser(num: number) {
	return {
		type: ActionTypesUser.CHANGE_NUMBER_ADDRESS_USER,
		payload: {
			num
		}
	}
}

export function changeComplementAddressUser(complement: string) {
	return {
		type: ActionTypesUser.CHANGE_COMPLEMENT_ADDRESS_USER,
		payload: {
			complement
		}
	}
}