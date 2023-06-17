import { useCookies } from 'react-cookie';
import { USER_COOKIE_KEY } from '@/constants';

export const useLogout = () => {
  const [cookie, serCookie, removeCookie] = useCookies([USER_COOKIE_KEY]);

  function logout() {
    removeCookie(USER_COOKIE_KEY);
  }
  return logout;
};
