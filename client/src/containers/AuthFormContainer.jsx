import { connect } from 'react-redux';

import { RootState } from '../store';
import AuthForm from '../components/AuthForm';
import { login, registration } from '../services/user';
import { resetStatus } from '../store/featurs/userSlice';
import {
  selectUserErrors,
  selectUserMessage,
  selectUserStatus,
} from '../entities/User/selectors';

const mapState = (state: RootState) => ({
  errors: selectUserErrors(state),
  status: selectUserStatus(state),
  message: selectUserMessage(state),
});

const mapDispatch = {
  resetStatus: () => resetStatus(),
  login: (email: string, password: string) => login({ email, password }),
  registration: (email: string, password: string) =>
    registration({ email, password }),
};

const connector = connect(mapState, mapDispatch);

export default connector(AuthForm);
