import {createContext, useContext} from 'react';
import {SessionContextT} from './types';

const SessionContext = createContext<SessionContextT>({
  currentSession: null,
  availableSessions: {},
  onLogout: async () => {},
  onLogin: async userKeys => {
    void userKeys;

    return {hasError: false};
  },
  onCreateSession: async newSession => {
    void newSession;

    return {hasError: false};
  },
});

export const useSessionContext = (): SessionContextT => useContext(SessionContext);

export default SessionContext;
