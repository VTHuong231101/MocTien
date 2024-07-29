import { PhoneFilled } from '@ant-design/icons';
import { StyledPhoneContact } from './phone-contact.style';

export const PhoneContact = () => {
  return (
    <StyledPhoneContact
      shape="circle"
      icon={<PhoneFilled style={{ color: '#fff' }} />}
    />
  );
};
