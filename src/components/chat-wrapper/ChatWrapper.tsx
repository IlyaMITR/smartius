import { useReducer, useState } from 'react';
import UseReducerContext from '../../Context';
import { reducer } from '../../state/reducer';
import { initStore } from '../../state/store';
import { ID, IMessage } from '../../types/store-types';
import ConsoleSection from '../console-section/ConsoleSection';
import MessageList from '../message-section/message-list';
import './chat-wrapper.scss';


export default function ChatWrapper() {
	
	const [state, dispatch] = useReducer(reducer, initStore)
	const [replyMod, setReplyMod] = useState(false)

	const addMessage = (msg: IMessage) => {
		dispatch({
			type: 'addMessage',
			payload: msg
		})
	}

	const setRep = (id: ID | null) => {
		dispatch({
			type: 'setRep',
			payload: id
		})
	}

	const contextValue = {
		state,
		replyMod, setReplyMod,
		addMessage, setRep
	}

	return (
		<div className="chat-wrapper">
			<UseReducerContext.Provider value={ contextValue }>
				<MessageList/>
				<ConsoleSection />
			</UseReducerContext.Provider>
		</div>

	)
}