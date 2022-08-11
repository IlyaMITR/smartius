export type ID = number;

export interface IStore {
	repID: ID | null;
	messages: IMessage[];
}

export interface IMessage {
	id: ID;
	userName: string;
	content: string;
	styles?: textStyles
	from?: ID;
}

type textStyles = {
	fontWeight: string;
	fontStyle: string;
	textDecoration: string;
}