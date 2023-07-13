import instance from '@/apis/index';

interface UpdateProfile {
  nickname: string;
  description: string;
  profile_color: string;
  is_profile: boolean;
}

export const updateProfile = ({
  nickname,
  description,
  profile_color,
  is_profile,
}: UpdateProfile) => {
  return instance.patch('/user/profile', { nickname, description, profile_color, is_profile });
};
