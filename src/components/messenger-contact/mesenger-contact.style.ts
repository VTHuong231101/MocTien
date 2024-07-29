import { FloatButton } from 'antd';
import styled, { CSSProperties } from 'styled-components';

export const StyledMessengerContact = styled(FloatButton)`
  border-color: transparent;
  background-color: var(--primary-light-color);
  position: fixed;
  bottom: 100px;
  right: 40px;
  box-shadow: 2px 4px 5px #888888;

  .ant-float-btn-body {
    background-color: var(--primary-light-color);
  }
`;

export const StyledMessengerIcon: CSSProperties = {
  width: '20px',
  position: 'absolute',
  bottom: '10px',
  right: '10px',
};
