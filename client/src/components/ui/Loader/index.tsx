import { memo } from 'react';

import { STATUS } from '../../../constants';
import getClasses from '../../../helpers/getClasses';

import css from './index.module.css';

type Props = {
  isPrimary: boolean;
  status: STATUS | null;
};

const Loader = memo(({ status, isPrimary }: Props) => {
  const className = isPrimary
    ? getClasses(css.loader, css.dark)
    : getClasses(css.loader, css.white);

  return (
    <div
      className={
        status === STATUS.loading ? getClasses(css.root, css.active) : css.root
      }
    >
      <div className={className}></div>
    </div>
  );
});

export default Loader;
