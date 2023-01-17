import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import SessionContext from './context';
import {AvailableSessionsT, HasErrorResponse, UserKeysT, UserSessionT} from './types';
import {getStorageItem, setStorageItem} from '../../utilities/async-storage';

type PropsT = {
  children: React.ReactNode;
};

const SessionContextProvider: React.FC<PropsT> = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentSession, setCurrentSession] = useState<UserSessionT | null>(null);
  const [availableSessions, setAvailableSessions] = useState<AvailableSessionsT>({});

  const restorePersistedData = async () => {
    setIsLoading(true);
    const storedSession = await getStorageItem<UserSessionT>('@current_session');
    const storedAccounts = await getStorageItem<AvailableSessionsT>('@available_sessions');

    if (storedSession) {
      setCurrentSession(storedSession);
    }

    if (storedAccounts) {
      setAvailableSessions(storedAccounts);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    void restorePersistedData();
  }, []);

  const onCreateSession = async (newSession: UserSessionT): HasErrorResponse => {
    const alreadyExists = !!availableSessions[newSession.username];

    if (!alreadyExists) {
      const newList = {...availableSessions, [newSession.username]: newSession};
      await setStorageItem('@available_sessions', newList);
      setAvailableSessions(newList);
    }

    return {hasError: alreadyExists};
  };

  const onLogin = async ({username, password}: UserKeysT): HasErrorResponse => {
    const existentSession = availableSessions[username];
    const validCredentials = existentSession && existentSession.password === password;

    if (validCredentials) {
      await setStorageItem('@current_session', existentSession);
      setCurrentSession(existentSession);
    }

    return {hasError: !validCredentials};
  };

  const onLogout = async () => {
    setCurrentSession(null);
    await setStorageItem('@current_session', null);
  };

  return (
    <SessionContext.Provider
      value={{currentSession, availableSessions, onLogin, onLogout, onCreateSession}}>
      {isLoading ? (
        <ActivityIndicator style={{flex: 1}} size="large" />
      ) : (
        // @ts-ignore
        React.cloneElement(children, {isLoggedIn: !!currentSession})
      )}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
