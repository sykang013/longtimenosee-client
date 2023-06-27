import { Auth } from '@/types/auth';
import instance from './index';

export const signIn = ({ email, password }: Auth) => {
  return instance.post('/auth/signin', { email, password });
};

export const kakaoSignIn = () => {
  return instance.get('/auth/kakao');
};

export const signOut = () => {
  return instance.post('/auth/logout');
};
