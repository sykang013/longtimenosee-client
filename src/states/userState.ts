import { UserInfo } from '@/types';
import { atom } from 'recoil';

const userSignedIn = atom<boolean>({
  key: 'userSignedIn',
  default: false,
});

const userInfo = atom<UserInfo>({
  key: 'userInfo',
  default: {
    email: '',
    nickname: '',
  },
});

export { userSignedIn, userInfo };
