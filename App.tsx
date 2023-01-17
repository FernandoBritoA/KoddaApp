import React from 'react';
import Toast from 'react-native-toast-message';
import SessionContextProvider from './app/context/SessionContext';
import RootStack from './app/screens/RootStack';

const App: React.FC = () => (
  <>
    <SessionContextProvider>
      <RootStack />
    </SessionContextProvider>

    <Toast />
  </>
);

export default App;
