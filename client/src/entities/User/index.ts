import { STATUS } from '../../constants';

export type User = {
  id: number;
  email: string;
};

export type UserDataResponse = {
  user: User;
  accessToken: string;
};

export type UserDataRequest = {
  email: string;
  password: string;
};

export type State = {
  user: User | null;
  auth: boolean;
  status:
    | typeof STATUS.loading
    | typeof STATUS.error
    | typeof STATUS.success
    | null;
  errors: Error | null;
  message: string | null;
};

export type Error = {
  [key: string]: string;
};

export type ResponseError = {
  message: string;
  errors: Error | null;
};
