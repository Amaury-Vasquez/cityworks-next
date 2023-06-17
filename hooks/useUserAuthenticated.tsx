import { User } from '@/interfaces';
import { useCookies } from 'react-cookie';
import { USER_COOKIE_KEY } from '@/constants';

export const useUserAuthenticated = () => {
  const [cookies, setCookie] = useCookies([USER_COOKIE_KEY]);

  const registerUserCookie = (data: User) => {
    setCookie(USER_COOKIE_KEY, data);
  };

  const user: User | undefined = cookies.user;
  return { user, registerUserCookie };
};
