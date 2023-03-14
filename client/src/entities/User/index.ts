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
  errorMessage: string | null;
  status:
    | typeof STATUS.loading
    | typeof STATUS.error
    | typeof STATUS.success
    | null;
};
