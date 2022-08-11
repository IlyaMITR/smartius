import list from '../../../images/list.svg';
import list_ol from '../../../images/list-ol.svg';
import rotate from '../../../images/rotate.svg';
import ControllerButton from './ControllerButton';
import ControllerButtonReset from './ControllerButtonReset';
import './controllers-panel.scss';


const listTypes = (area: HTMLTextAreaElement, type: 'ol' | 'ul') => {
	let newStr = '';
		if (area.ariaSelected === 'false' || area.ariaSelected === null){
			area.value.split('\n').forEach((str, i, arr) => {
				newStr += `${type === 'ul' ? '•' : `${i+1}.`} ${str}${i<arr.length-1 ? '\n' : ''}`
			})
			area.ariaSelected = 'true'
		}else {
			area.value.split('\n').forEach((str, i, arr) => {
				let arrStr = str.split(' ')
				arrStr.shift()
				arrStr.join(' ')
				newStr += `${arrStr}${i<arr.length-1 ? '\n' : ''}`
			})
			area.ariaSelected = 'false'
		}
		area.value = newStr
}

export default function ControllersPanel() {
	
	const changeStyle = (styleName: any, param: string) => {
		if (textArea().style[styleName] === param) {
			textArea().style[styleName] = ''
		} else {
			textArea().style[styleName] = param
		}
	}
	const textArea = () => document.querySelector('textarea.console-form__inputs_item') as HTMLTextAreaElement;

	const bold = () => {
		changeStyle('fontWeight', 'bold')
	}

	const italic = () => {
		changeStyle('fontStyle', 'italic')
	}

	const underline = () => {
		changeStyle('textDecoration', 'underline')
	}

	const ulList = () => {
		listTypes(textArea(), 'ul')
	}

	const olList = () => {
		listTypes(textArea(), 'ol')
	}

	const reset = () => {
		textArea().style.fontWeight = '';
		textArea().style.fontStyle = '';
		textArea().style.textDecoration = '';
		document.querySelectorAll('.controllers-panel__item').forEach((node:any, i) => {
			if (i < 3) node.ariaSelected = 'false';
		})
	}

	return (
		<div className="controllers-panel">


			<ControllerButton caption='жирный' onClick={bold}>
				<b>B</b>
			</ControllerButton>

			<ControllerButton caption='курсив' onClick={italic}>
				<i>I</i>
			</ControllerButton>

			<ControllerButton caption='подчёркнутый' onClick={underline}>
				<u>U</u>
			</ControllerButton>

			<ControllerButton caption='ненум. список' onClick={ulList}>
				<img src={list} alt="list.svg" />
			</ControllerButton>

			<ControllerButton caption='нум. список' onClick={olList}>
				<img src={list_ol} alt="list-ol.svg" />
			</ControllerButton>

			<ControllerButtonReset caption='сбросить' onClick={reset}>
				<img src={rotate} alt="rotate.svg" />
			</ControllerButtonReset>


		</div>
	)
}