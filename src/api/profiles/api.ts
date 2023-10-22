import instance from "api/config";
import { IItemProfilesResponseOfGetApi, IItemProfileResponseOfPostApi } from "./types";

export const getProfilesApi = async () => {
	const response = await instance.get<IItemProfilesResponseOfGetApi[]>('/profiles');
	return response.data;
};

export const getOneProfileApi = async (id: number) => {
	const response = await instance.get<IItemProfilesResponseOfGetApi>('/profiles', {params: { id }});
	return response.data;
};

export const postProfileApi = async (data: IItemProfileResponseOfPostApi) => {
	const response = await instance.post<IItemProfileResponseOfPostApi>('/profiles', data);
	return response.data;
};

export const deleteOneProfileApi = async (id: number) => {
	const response = await instance.delete('/profiles', {params: { id }});
	return response.data;
};