import { UserInfo } from '@/types';
import { atom, selector } from 'recoil';

const userInfo = atom<UserInfo>({
  key: 'userInfo',
  default: {
    email: '',
    nickname: '',
    description: '',
    profile_color: '',
  },
});

const userSignedIn = selector<boolean>({
  key: 'userSignedIn',
  get: ({ get }) => {
    const { email } = get(userInfo);
    return email !== '';
  },
  set: ({ set }) => {
    set(userInfo, {
      email: '',
      nickname: '',
      description: '',
      profile_color: '',
    });
  },
});

export { userInfo, userSignedIn };
