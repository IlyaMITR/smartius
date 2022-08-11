import { SyntheticEvent, useContext, useRef } from 'react';
import UseReducerContext from '../../../Context';
import './console-form.scss';

export default function ConsoleForm() {

	const nameInput = useRef<HTMLInputElement>(null);
	const textareaMsg = useRef<HTMLTextAreaElement>(null);
	const { addMessage, setRep, replyMod, setReplyMod, state } = useContext(UseReducerContext);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const name = nameInput.current;
		const msg = textareaMsg.current;
		if (name && msg) {
			addMessage!({
				id: Date.now(),
				userName: name.value,
				content: msg.value,
				styles: {
					fontWeight: msg.style.fontWeight,
					fontStyle: msg.style.fontStyle,
					textDecoration: msg.style.textDecoration
				},
				from: state?.repID!
			})
			setRep!(null)
			replyMod && setReplyMod!(false)
		}
	}

	return (
		<form className='console-form' onSubmit={handleSubmit}>
			<div className="console-form__inputs">
				<input className="console-form__inputs_item" ref={nameInput} type="text" placeholder="Имя" required/>
				<textarea className="console-form__inputs_item" ref={textareaMsg} placeholder="Сообщение" required/>
			</div>
			<input className='console-form__submit' type="submit" value="🠊"/>
		</form>
	)
}