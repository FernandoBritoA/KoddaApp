import {useEffect, useState} from 'react';
import axios from 'axios';
import {UserT} from '../../../types/User';

type ReturnT = {
  users: UserT[];
  isLoading: boolean;
  onEndReached: () => void;
};

const useFetchUsers = (): ReturnT => {
  const [page, setPage] = useState<number>(1);
  const [users, setUsers] = useState<UserT[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    void fetch(page);
  }, [page]);

  const fetch = async (newPage: number) => {
    try {
      const url = `https://randomuser.me/api/?page=${newPage}&results=10`;
      setIsLoading(true);
      const response = await axios.get(url);
      setUsers(prevState => [...prevState, ...response.data.results]);
      setIsLoading(false);
    } catch (e) {
      // TODO: Error handling
    }
  };

  const onEndReached = () => setPage(prevState => prevState + 1);

  return {users, isLoading, onEndReached};
};

export default useFetchUsers;
