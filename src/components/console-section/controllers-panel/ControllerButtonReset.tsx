type Props = {
	children: any;
	onClick: () => any;
	caption: string;
}

export default function ControllerButtonReset({ children, onClick, caption }: Props) {

	return (
		<div className="controllers-panel__item" data-title={caption}>
			<button className="controllers-panel__item_btn" onClick={onClick}>
				{children}
			</button>
		</div>
	)
}