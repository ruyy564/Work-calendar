import { LOCAL_STORAGE_USER } from '../entities/User/constants';

const getUserId = (): string => {
  const data = localStorage.getItem(LOCAL_STORAGE_USER);

  if (data) {
    const user = JSON.parse(data);

    return user.id;
  }

  return '';
};

export default getUserId;
