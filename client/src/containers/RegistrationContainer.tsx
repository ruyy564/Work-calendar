import { connect } from 'react-redux';

import { RootState } from '../store';
import Registration from '../components/Registration';
import { registration } from '../services/user';
import {
  selectUserStatus,
  selectUserErrorMessage,
} from '../entities/User/selectors';

const mapState = (state: RootState) => ({
  errorMessage: selectUserErrorMessage(state),
  status: selectUserStatus(state),
});

const mapDispatch = {
  registration: (email: string, password: string) =>
    registration({ email, password }),
};

const connector = connect(mapState, mapDispatch);

export default connector(Registration);
