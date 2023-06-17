import {
  User,
  UserLogin,
  UserRegister,
  LoginFailResponse,
  LoginGoodResponse,
} from '@/interfaces';

export async function authenticateUser(
  userData: UserLogin
): Promise<LoginFailResponse | LoginGoodResponse> {
  const response = await fetch('http://0.0.0.0:5000/api/v1/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (response.status === 200) return { user: data, status: 200 };
  return { message: data.message, status: 401 };
}

export async function registerUser(userData: UserRegister): Promise<User> {
  const response = await fetch('http://0.0.0.0:5000/api/v1/register', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return await response.json();
}
