import { UserInfo } from '@/types';
import { atom, selector } from 'recoil';

const userInfo = atom<UserInfo>({
  key: 'userInfo',
  default: {
    email: '',
    nickname: '',
    description: '',
    profile_color: '',
    is_profile: false,
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
      is_profile: false,
    });
  },
});

export { userInfo, userSignedIn };
