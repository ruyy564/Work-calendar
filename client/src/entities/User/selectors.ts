import type { RootState } from '../../store';

export const selectUserErrors = (state: RootState) => state.user.errors;

export const selectUserStatus = (state: RootState) => state.user.status;

export const selectUserMessage = (state: RootState) => state.user.message;

export const selectUserAuth = (state: RootState) => state.user.auth;

export const selectUserInfo = (state: RootState) => state.user.user;
