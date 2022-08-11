import { Reducer } from "react";
import { IAction } from "../types/action-types";
import { ID, IMessage, IStore } from "../types/store-types";

export const reducer: Reducer<IStore, IAction> = (state, action):any => {
  switch (action.type) {
    case 'addMessage':
			return {
				repID: state.repID,
				messages: [...state.messages, action.payload as IMessage]
			};
    case 'setRep':
      return {
				repID: action.payload as ID,
				messages: state.messages
			};
    default:
      return state;
  }
}