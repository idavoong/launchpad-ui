import cx from 'clsx';
import { forwardRef } from 'react';

import './styles/Menu.css';

type MenuBaseProps = React.ComponentPropsWithRef<'div'>;

// This is the pure presentational component that contains menu items
const MenuBase = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const className = cx('Menu', props.className);
    return (
      <div {...props} className={className} ref={ref}>
        {children}
      </div>
    );
  }
);

MenuBase.displayName = 'MenuBase';

export { MenuBase };
export type { MenuBaseProps };
