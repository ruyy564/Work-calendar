import { connect } from 'react-redux';

import Login from '../components/Login';
import { login } from '../services/user';

const mapDispatch = {
  login: (email: string, password: string) => login({ email, password }),
};

const connector = connect(null, mapDispatch);

export default connector(Login);
