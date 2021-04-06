import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>News</MenuItem>
        <MenuItem>Bookmarks</MenuItem>
      </Menu>
      <Search>S</Search>
    </Container>
  );
};

const Container = styled.div`
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li`
  display: inline-block;
  color: var(--white);
  font-weight: bold;
  font-size: 28px;
  margin-right: 20px;
`;

const Search = styled.div``;
