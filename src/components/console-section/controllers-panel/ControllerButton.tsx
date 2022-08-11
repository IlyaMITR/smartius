import { useRef } from "react";

type Props = {
	children: any;
	onClick?: (e?:any) => any ;
	caption: string;
}

export default function ControllerButton({ children, onClick, caption }: Props) {

	const node = useRef<HTMLDivElement>(null)

	const handleClick = () => {
		if (node.current?.ariaSelected === 'true') {
			node.current.ariaSelected = 'false'
		} else {
			node.current!.ariaSelected = 'true'
		}
		onClick!();
	}

	return (
		<div ref={node} data-title={caption} className="controllers-panel__item" aria-selected={false}>
			<button className="controllers-panel__item_btn" onClick={handleClick}>
				{children}
			</button>
		</div>
	)
}