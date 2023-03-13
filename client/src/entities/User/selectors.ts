import type { RootState } from '../../store';

export const selectUserErrorMessage = (state: RootState) =>
  state.user.errorMessage;

export const selectUserStatus = (state: RootState) => state.user.status;

export const selectUserAuth = (state: RootState) => state.user.auth;

export const selectUserInfo = (state: RootState) => state.user.user;
