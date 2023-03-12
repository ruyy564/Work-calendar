import { connect } from 'react-redux';

import { ButtonLogout } from '../components/ButtonIcon';
import { logout } from '../store/featurs/User/userSlice';

const mapDispatch = {
  onClick: () => logout(),
};

const connector = connect(null, mapDispatch);

export default connector(ButtonLogout);
