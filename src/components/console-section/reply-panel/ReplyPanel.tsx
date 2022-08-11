import { useContext } from 'react';
import UseReducerContext from '../../../Context';
import './reply-panel.scss';

export default function ReplyPanel() {

	const { state, setReplyMod, setRep } = useContext(UseReducerContext)
	const repMsg = state?.messages.find(msg => msg.id === state.repID)
	const handleClick = () => {
		setReplyMod!(false)
		setRep!(null)
	}

	return (
		<div className="reply-panel">
			<div className="reply-panel__title">Ответ на сообщение</div>
			<div className="reply-panel__from">
				<div className="reply-panel__from_user">{ repMsg?.userName }</div>
				<div className="reply-panel__from_content"><pre>{ repMsg?.content }</pre></div>
			</div>
			<button className="reply-panel__close" onClick={handleClick}>Отмена</button>
		</div>
	)
}