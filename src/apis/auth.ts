import instance from '@/apis/index';
import { Auth } from '@/types/auth';

export const signUp = ({ email, password }: Auth) => {
  return instance.post('/auth/signup', { email, password });
};
