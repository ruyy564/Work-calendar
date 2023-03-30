import { connect } from 'react-redux';
import { RootState } from '../store';

import { ButtonLog } from '../components/ui/ButtonIcon';
import { logout } from '../services/user';
import { resetState as resetStateModal } from '../store/featurs/modalSlice';
import { resetState as resetStateEvent } from '../store/featurs/eventSlice';

import { selectUserAuth } from '../entities/User/selectors';

const mapState = (state: RootState) => ({
  auth: selectUserAuth(state),
});

const mapDispatch = {
  logout: () => logout(),
  resetStateModal: () => resetStateModal(),
  resetStateEvent: () => resetStateEvent(),
};

const connector = connect(mapState, mapDispatch);

export default connector(ButtonLog);
