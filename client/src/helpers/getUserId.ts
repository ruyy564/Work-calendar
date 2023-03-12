const getUserId = (): string => {
  const data = localStorage.getItem('user');

  if (data) {
    const user = JSON.parse(data);

    return user.id;
  }

  return '';
};

export default getUserId;
