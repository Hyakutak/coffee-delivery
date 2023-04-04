import { ActionTypesUser } from "./actions";
import { IUserInfo } from "../../interfaces/IUser";
import produce from "immer";

interface IUserReducer {
    userAddress: IUserInfo,
    numberAddress: 0,
    complementUser: ''
}

export function UserReducer(state: IUserReducer, action: any) {
    switch (action.type) {

		case ActionTypesUser.ADD_USER_INFO: {
			return produce(state, (draft) => {
				draft.userAddress = action.payload.userInfo;
			});
		}

		case ActionTypesUser.CHANGE_NUMBER_ADDRESS_USER: {
			return produce(state, (draft) => {
				draft.userAddress.numero = action.payload.num;
			});
		}

		case ActionTypesUser.CHANGE_COMPLEMENT_ADDRESS_USER: {
			return produce(state, (draft) => {
				draft.userAddress.complemento = action.payload.complement;
			});
		}

		default:
			return state;
	}
}