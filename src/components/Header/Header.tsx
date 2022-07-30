import { Container } from './Header.styles';

const Header = ({ title, marginRight }: { title: string; marginRight?: string }) => {
  return <Container marginRight={marginRight}>{title}</Container>;
};

export default Header;
