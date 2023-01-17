export interface UserSessionT {
  name: string;
  username: string;
  password: string;
}

export type AvailableSessionsT = {[username: string]: UserSessionT};

export type UserKeysT = {username: string; password: string};

export type HasErrorResponse = Promise<{hasError: boolean}>;

export interface SessionContextT {
  currentSession: UserSessionT | null;
  availableSessions: AvailableSessionsT;
  onLogout: () => Promise<void>;
  onLogin: (userKeys: UserKeysT) => HasErrorResponse;
  onCreateSession: (newSession: UserSessionT) => HasErrorResponse;
}
