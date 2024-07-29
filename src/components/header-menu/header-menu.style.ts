import styled, { CSSProperties } from 'styled-components';

export const StyledHeaderMenu = styled.div`
  .ant-menu-title-content {
    color: var(--primary-color);
    text-transform: capitalize;
    font-weight: 600;
    font-size: 16px;
  }

  .ant-menu-light.ant-menu-horizontal > .ant-menu-item:hover::after {
    border-bottom-color: var(--primary-color);
  }

  .ant-menu-item.ant-menu-item-selected::after {
    border-bottom-color: var(--primary-color);
  }

  .ant-menu .ant-menu-item {
    padding: 0 23px;
  }
`;

export const StyledMenu: CSSProperties = {
  backgroundColor: 'transparent',
  color: 'var(--primary-color)',
  borderBottom: 'none',
};
