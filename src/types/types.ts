export interface IUserData {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
  isActivated: boolean;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IAuthState {
  user: IUser | null;
  isAuth: boolean;
  isAuthChecked: boolean;
  loading: boolean;
  error: string | null | unknown;
}
