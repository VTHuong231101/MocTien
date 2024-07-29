import { Col, Image, Row } from 'antd';
import {
  ChangeLanguageButton,
  HeaderMenu,
  HeaderSearchAndCart,
  LoginSigninBtn,
  MessengerContact,
} from '../../components';
import { StyledHeaderLayout } from './header-layout.style';
import { PhoneContact } from '../../components/phone-contact';

export const HeaderLayout = () => {
  return (
    <StyledHeaderLayout>
      <Row>
        <Col span={2}>
          <ChangeLanguageButton />
        </Col>
        <Col span={3}>
          <Image src="/logo.png" width={65} />
        </Col>
        <Col span={10}>
          <HeaderMenu />
        </Col>
        <Col span={4}>
          <HeaderSearchAndCart />
        </Col>
        <Col span={4}>
          <LoginSigninBtn />
        </Col>
      </Row>
      <MessengerContact />
      <PhoneContact />
    </StyledHeaderLayout>
  );
};
