import { connect } from 'react-redux';

import Router from '../components/Router';
import { RootState } from '../store';

const mapState = (state: RootState) => ({
  auth: state.user.auth,
});

const connector = connect(mapState);

export default connector(Router);
