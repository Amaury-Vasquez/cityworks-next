import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { USER_COOKIE_KEY } from '@/constants';
import { User } from '@/interfaces';

export const useUserAuthenticated = () => {
  const [cookies, setCookie] = useCookies([USER_COOKIE_KEY]);
  const [userCookie, setUserCookie] = useState<User | undefined>(undefined);

  const registerUserCookie = (data: User) => {
    setCookie(USER_COOKIE_KEY, data);
  };

  useEffect(() => {
    setUserCookie(cookies[USER_COOKIE_KEY]);
  }, [cookies]);

  return { user: userCookie, registerUserCookie };
};
