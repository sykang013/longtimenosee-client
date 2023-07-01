export interface Auth {
  email: string;
  password: string;
}

export interface UserInfo {
  email: string;
  nickname: string;
  description?: string;
  profile_color?: string;
}
