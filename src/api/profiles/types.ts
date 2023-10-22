export interface IItemProfilesResponseOfGetApi {
  id: number;
  name: string;
  desc: string;
  photo: string;
  createAt: Date,
}

export interface IItemProfileResponseOfPostApi extends Pick<IItemProfilesResponseOfGetApi, 'name' | 'desc' | 'photo'> {}