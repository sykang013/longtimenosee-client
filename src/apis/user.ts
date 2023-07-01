import instance from '@/apis/index';

interface UpdateProfile {
  nickname: string;
  description: string;
  profile_color: string;
}

export const updateProfile = ({ nickname, description, profile_color }: UpdateProfile) => {
  return instance.patch('/user/profile', { nickname, description, profile_color });
};
