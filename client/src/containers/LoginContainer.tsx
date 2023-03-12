import { connect } from 'react-redux';

import Login from '../components/Login';
import { login } from '../store/featurs/User/userSlice';

const mapDispatch = {
  login: (email: string, password: string) => login({ email, password }),
};

const connector = connect(null, mapDispatch);

export default connector(Login);
