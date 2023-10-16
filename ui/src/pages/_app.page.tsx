import '../styles/globals.css';
import type { AppProps } from 'next/app'
import React, { useState } from 'react';

import './reactCOIServiceWorker';

import { createContext, Dispatch, SetStateAction } from 'react';

interface UserTypeContextType {
  userRole: string;
  setUserRole: Dispatch<SetStateAction<string>>;
}

const UserTypeContext = createContext<UserTypeContextType>({
  userRole: '',
  setUserRole: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [userRole, setUserRole] = useState('');
  return ( 
    <UserTypeContext.Provider value={{ userRole, setUserRole }}>
      <Component {...pageProps} />
    </UserTypeContext.Provider>
  );
}