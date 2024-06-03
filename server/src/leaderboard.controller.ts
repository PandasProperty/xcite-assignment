import { Request, Response } from "express";
import { fetchUsers } from "./services";

export async function getLeaderboard(_req: Request, res: Response) {
  try {
    let data = await fetchUsers();
    data = data.sort((user1, user2) => {
      if (user1.wins === user2.wins) {
        return 0;
      }
      if (user1.wins > user2.wins) {
        return -1;
      }
      return 1;
    });
    data = data.slice(0, 10);
    res.send(data);
  } catch (error: any) {
    res.status(500).send({
      message: error.message
    });
  };
}