import { useContext } from "react";
import { IMessage } from "../../types/store-types";
import UseReducerContext from "../../Context";


export default function MessageItem({ id, content, userName, styles, from }: IMessage) {
	
	const { state, setReplyMod, setRep } = useContext(UseReducerContext)
	const fromMsg = state?.messages.find(msg => msg.id === from)

	const handleClick = () => {
		setRep!(id)
		setReplyMod!(true)
	}

	return (
		<div className={`message ${userName === 'Дмитрий' && 'left'}`}>
			<div className="message__user">{userName}</div>
			{
				from &&
					<div className="message__from">
						<div className="message__from_user">{ fromMsg?.userName }</div>
						<div className="message__from_content"><pre>{ fromMsg?.content }</pre></div>
					</div>
			}
			<div className="message__content" style={{
				fontWeight: styles?.fontWeight,
				fontStyle: styles?.fontStyle,
				textDecoration: styles?.textDecoration
			}}>
				<pre>{content}</pre>
			</div>
			{
				userName !== 'Дмитрий' &&
					<div className="message__reply">
						<button className="message__reply_btn" onClick={handleClick}>Ответить</button>
					</div>
			}
		</div>
	)
}