export interface Auth {
  email: string;
  password: string;
}

export interface UserInfo {
  email?: string;
  social_id?: string;
  is_valid?: boolean;
  is_profile?: boolean;
  nickname?: string;
  description?: string;
  profile_color?: string;
}
