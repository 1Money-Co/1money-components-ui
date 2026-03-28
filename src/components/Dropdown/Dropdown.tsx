import Trigger from '@/components/Trigger';
import type { FC } from 'react';
import type { DropdownProps } from './interface';

const Dropdown: FC<DropdownProps> = ({
  trigger = 'click',
  role = 'dialog',
  ...rest
}) => <Trigger trigger={trigger} role={role} {...rest} />;

export default Dropdown;
