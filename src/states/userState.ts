import { UserInfo } from '@/types';
import { atom, selector } from 'recoil';

const userInfo = atom<UserInfo>({
  key: 'userInfo',
  default: {
    email: '',
    nickname: '',
  },
});

const userSignedIn = selector<boolean>({
  key: 'userSignedIn',
  get: ({ get }) => {
    const { email, nickname } = get(userInfo);
    return email !== '' && nickname !== '';
  },
  set: ({ set }) => {
    set(userInfo, {
      email: '',
      nickname: '',
    });
  },
});

export { userInfo, userSignedIn };
