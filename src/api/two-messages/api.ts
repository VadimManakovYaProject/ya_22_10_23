import instance from "api/config";
import { IMessageResponseOfGetApi } from "./types";

export const getOneMessageApi = async (id: number) => {
		const response = await instance.get<IMessageResponseOfGetApi[]>(`/messages/${id}`);
		return response.data;
};