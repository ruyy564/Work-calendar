import { connect } from 'react-redux';

import { RootState } from '../store';
import Login from '../components/Login';
import { login, registration } from '../services/user';
import {
  selectUserStatus,
  selectUserErrorMessage,
} from '../entities/User/selectors';

const mapState = (state: RootState) => ({
  errorMessage: selectUserErrorMessage(state),
  status: selectUserStatus(state),
});

const mapDispatch = {
  login: (email: string, password: string) => login({ email, password }),
  registration: (email: string, password: string) =>
    registration({ email, password }),
};

const connector = connect(mapState, mapDispatch);

export default connector(Login);
