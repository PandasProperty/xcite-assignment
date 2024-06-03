import { PlaceholderUsersResponse, User } from "./types";

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json() as PlaceholderUsersResponse;

  return data.map(({ id, name, username, email, address: { city } }) => ({
    id,
    name,
    username,
    email,
    city,
    wins: Math.floor(Math.random() * 1000),
  }));
}