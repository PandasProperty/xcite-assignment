"use client";

import Card from "@/components/card";
import Error from "@/components/error";
import Filters from "@/components/filters";
import Loading from "@/components/loading";
import { fetchLeaderboard } from "@/services";
import { SORT, User } from "@/types";
import { useEffect, useMemo, useState } from "react";

export default function Leaderboard() {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>();

  const [sort, setSort] = useState<SORT>(SORT.DESC);
  const [search, setSearch] = useState("");

  const getLeaderboard = async () => {
    const { users, error } = await fetchLeaderboard();
    setLoading(false);
    if (error) {
      setError(error);
      setUsers([]);
      return;
    }
    setUsers(users);
  };

  useEffect(() => {
    getLeaderboard();
  }, []);

  const onDelete = (id: number) => {
    const index = users.findIndex((user) => user.id === id);
    setUsers([
      ...users.slice(0, index),
      ...users.slice(index + 1),
    ]);
  }

  const filteredData = useMemo(() => {
    let results = search ? [...users.filter(({ name, username, city, email }) => {
      if (
        name.toLowerCase().includes(search.toLowerCase())
        || username.toLowerCase().includes(search.toLowerCase())
        || city.toLowerCase().includes(search.toLowerCase())
        || email.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      }
      return false;
    })] : [...users];
    if (sort === SORT.ASC) {
      results = results.sort((user1, user2) => {
        if (user1.wins === user2.wins) {
          return 0;
        }
        if (user1.wins > user2.wins) {
          return 1;
        }
        return -1;
      });
    }
    return results;
  }, [search, users, sort]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />; 
  }

  return (
    <div className="w-full">
      <Filters sort={sort} setSort={setSort} search={search} setSearch={setSearch} />
      <div className="grid w-fit px-8 md:px-0 mt-8 mx-auto grid-col-1 md:grid-cols-2 gap-8 justify-stretch">
        {filteredData.map(user => <Card key={user.id} user={user} onDelete={onDelete} />)}
      </div> 
    </div>
  );
}