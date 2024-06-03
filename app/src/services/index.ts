import { Photo, User } from "@/types";

export const fetchLeaderboard: () => Promise<{
  users: User[];
  error?: string;
}> = async () => {
  try {
    const res = await fetch("http://127.0.0.1:4000/leaderboard");
    if (res.status !== 200) {
      const { message } = await res.json();
      return { users: [], error: message }
    }
    const users = await res.json() as User[];
    return { users }
  } catch (error: any) {
    return { users: [], error: error.message }
  }
}
export const fetchPhotos: () => Promise<{
  photos: Photo[];
  error?: string;
}> = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
      next: { revalidate: 3600 }
    })
    const photos = await res.json()
    return {
      photos,
    };
  } catch (error: any) {
    return {
      photos: [],
      error: error.message,
    };
  }
}