import { memo } from 'react';

import getClasses from '../../../helpers/getClasses';

import css from './index.module.css';

type Props = {
  isPrimary: boolean;
};

const Loader = memo(({ isPrimary }: Props) => {
  const className = isPrimary
    ? getClasses(css.root, css.dark)
    : getClasses(css.root, css.white);

  return <div className={className}></div>;
});

export default Loader;
