import { memo, useContext } from 'react';
import UseReducerContext from '../../Context';
import MessageItem from './message-item';
import './message-section.scss';

export default memo(
	function MessageList() {
	
		const { state } = useContext(UseReducerContext)	
	
		return (
			<div className="message-section">
				<div className="message-list">
					{
						state?.messages.map(msg => <MessageItem key={msg.id} {...msg} />)
					}
				</div>
			</div>
		)
	}
)