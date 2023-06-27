import instance from '@/apis/index';
import { Auth } from '@/types/auth';

export const signUp = ({ email, password }: Auth) => {
  return instance.post('/auth/signup', { email, password });
};

export const verifyUser = ({ email }: { email: string }) => {
  return instance.get(`/auth/status?email=${email}`);
};

export const signIn = ({ email, password }: Auth) => {
  return instance.post('/auth/signin', { email, password });
};

export const kakaoSignIn = () => {
  return instance.get('/auth/kakao');
};

export const signOut = () => {
  return instance.post('/auth/signout');
};
