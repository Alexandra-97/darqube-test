import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Search } from "./ui/Search";

export const Header = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <MenuLink to={"/news"}>News</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to={"/bookmarks"}>Bookmarks</MenuLink>
        </MenuItem>
      </Menu>
      <Search />
    </Container>
  );
};

const Container = styled.header`
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const MenuLink = styled(NavLink)`
  color: var(--lightGrey);
  font-weight: bold;
  font-size: 28px;
  text-decoration: none;
  &.active {
    color: var(--white);
  }
  &:hover {
    opacity: 0.9;
  }
`;
