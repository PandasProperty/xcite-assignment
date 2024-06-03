export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  wins: number;
};

export type PlaceholderUsersResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    ba: string;
  };
}[];