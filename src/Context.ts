import { createContext } from "react";
import { ID, IMessage, IStore } from "./types/store-types";

type URContext = {
	state? : IStore;
	addMessage?: (msg: IMessage) => void;
	setRep?: (id: ID|null) => void;
	replyMod?: boolean;
	setReplyMod?: React.Dispatch<React.SetStateAction<boolean>>
}

const UseReducerContext = createContext<URContext>({});

export default UseReducerContext;