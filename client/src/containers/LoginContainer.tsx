import { connect } from 'react-redux';

import { RootState } from '../store';
import Login from '../components/Login';
import { login } from '../services/user';
import { selectUserErrorMessage } from '../entities/User/selectors';

const mapState = (state: RootState) => ({
  errorMessage: selectUserErrorMessage(state),
});

const mapDispatch = {
  login: (email: string, password: string) => login({ email, password }),
};

const connector = connect(mapState, mapDispatch);

export default connector(Login);
