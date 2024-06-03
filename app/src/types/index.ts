export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  wins: number;
};

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export enum SORT {
  ASC = 'ASC',
  DESC = 'DESC',
}
