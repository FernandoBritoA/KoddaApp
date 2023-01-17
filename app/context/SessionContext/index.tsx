import React, {useState} from 'react';
import SessionContext from './context';
import {AvailableSessionsT, HasErrorResponse, UserKeysT, UserSessionT} from './types';

type PropsT = {
  children: React.ReactNode;
};

const SessionContextProvider: React.FC<PropsT> = ({children}) => {
  const [currentSession, setCurrentSession] = useState<UserSessionT | null>(null);
  const [availableSessions, setAvailableSessions] = useState<AvailableSessionsT>({});

  const onCreateSession = (newSession: UserSessionT): HasErrorResponse => {
    const alreadyExists = !!availableSessions[newSession.username];

    if (!alreadyExists) {
      setAvailableSessions(prevState => ({...prevState, [newSession.username]: newSession}));
    }

    return {hasError: alreadyExists};
  };

  const onLogin = ({username, password}: UserKeysT): HasErrorResponse => {
    const existentSession = availableSessions[username];
    const validCredentials = existentSession && existentSession.password === password;

    if (validCredentials) {
      setCurrentSession(existentSession);
    }

    return {hasError: !validCredentials};
  };

  const onLogout = () => setCurrentSession(null);

  return (
    <SessionContext.Provider
      value={{currentSession, availableSessions, onLogin, onLogout, onCreateSession}}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
