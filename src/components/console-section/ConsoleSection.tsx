import { memo, useContext } from "react";
import UseReducerContext from "../../Context";
import ConsoleForm from "./console-form/ConsoleForm";
import ControllersPanel from "./controllers-panel/ControollersPanel";
import ReplyPanel from "./reply-panel/ReplyPanel";
import './console-section.scss';

export default memo(
	function ConsoleSection() {
	
		const { replyMod } = useContext(UseReducerContext)
				
		return (
			<div className={`console-section ${replyMod && 'reply'}`}>
				<ControllersPanel />
				{
					replyMod && <ReplyPanel/>
				}
				<ConsoleForm />
			</div>
		)
	}
)