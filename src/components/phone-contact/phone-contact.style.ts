import { FloatButton } from 'antd';
import styled from 'styled-components';

export const StyledPhoneContact = styled(FloatButton)`
  border-color: transparent;
  background-color: var(--primary-light-color);
  position: fixed;
  bottom: 40px;
  right: 40px;
  box-shadow: 2px 4px 5px #888888;

  .ant-float-btn-body {
    background-color: var(--primary-light-color);
  }
`;
