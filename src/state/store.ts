import { IStore } from "../types/store-types";

export const initStore: IStore = {
	repID: null,
	messages: [
		{
			id: 1,
			userName: 'Андрей',
			content: 'Хочу программировать'
		},
		{
			id: 2,
			userName: 'Мирослав',
			content: 'Попробуй Python'
		},
		{
			id: 3,
			userName: 'Дмитрий',
			content: 'Лучше php'
		},
		{
			id: 4,
			userName: 'Андрей',
			content: 'Спасибо за ответы!'
		},
		{
			id: 5,
			userName: 'Дмитрий',
			content: 'Был рад помочь, обращайся!',
			from: 1
		},
	]
}