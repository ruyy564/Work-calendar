import { connect } from 'react-redux';

import Router from '../components/Router';
import { RootState } from '../store';
import { selectUserAuth } from '../entities/User/selectors';

const mapState = (state: RootState) => ({
  auth: selectUserAuth(state),
});

const connector = connect(mapState);

export default connector(Router);
