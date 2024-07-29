import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import {
  StyledHeaderIcons,
  StyledHeaderSearchAndCart,
} from './search-and-cart.style';

export const HeaderSearchAndCart = () => {
  return (
    <StyledHeaderSearchAndCart>
      <SearchOutlined style={StyledHeaderIcons} />
      <ShoppingCartOutlined style={StyledHeaderIcons} />
    </StyledHeaderSearchAndCart>
  );
};
