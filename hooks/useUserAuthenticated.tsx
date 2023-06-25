import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { USER_COOKIE_KEY } from '@/constants';
import { User } from '@/interfaces';
import { useRouter } from 'next/router';

export const useUserAuthenticated = () => {
  const [cookies, setCookie, removeCookie] = useCookies([USER_COOKIE_KEY]);
  const [userCookie, setUserCookie] = useState<User | undefined>(undefined);
  const router = useRouter();

  const registerUserCookie = (data: User) => {
    setCookie(USER_COOKIE_KEY, data);
  };

  function logout() {
    removeCookie(USER_COOKIE_KEY);
    router.push('/');
  }

  useEffect(() => {
    setUserCookie(cookies[USER_COOKIE_KEY]);
  }, [cookies]);

  return { user: userCookie, registerUserCookie, logout };
};
