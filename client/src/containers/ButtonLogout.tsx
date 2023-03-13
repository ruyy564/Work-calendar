import { connect } from 'react-redux';

import { ButtonLogout } from '../components/UI/ButtonIcon';
import { logout } from '../services/user';

const mapDispatch = {
  onClick: () => logout(),
};

const connector = connect(null, mapDispatch);

export default connector(ButtonLogout);
