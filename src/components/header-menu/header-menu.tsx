import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { StyledHeaderMenu, StyledMenu } from './header-menu.style';

export const HeaderMenu = () => {
  type MenuItem = Required<MenuProps>['items'][number];

  const menuItems: MenuItem[] = [
    {
      label: 'Trang Chủ',
      key: 'home',
    },
    {
      label: 'Sản phẩm',
      key: 'products',
    },
    {
      label: 'Lịch Sử',
      key: 'history',
    },
    {
      label: 'Liên hệ',
      key: 'contact',
    },
  ];

  const [current, setCurrent] = useState<string>('home');

  const onC: MenuProps['onClick'] = (e) => {
    console.error(e.key);
    setCurrent(e.key);
  };
  return (
    <StyledHeaderMenu>
      <Menu
        style={StyledMenu}
        onClick={onC}
        selectedKeys={[current]}
        items={menuItems}
        mode="horizontal"
      />
    </StyledHeaderMenu>
  );
};
