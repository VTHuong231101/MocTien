import {
  StyledMessengerContact,
  StyledMessengerIcon,
} from './mesenger-contact.style';

export const MessengerContact = () => {
  return (
    <StyledMessengerContact
      shape="circle"
      icon={<img style={StyledMessengerIcon} src="./messenger.png" />}
    ></StyledMessengerContact>
  );
};
