import styled from '@emotion/styled'

export const Logo = styled.img`
  border: 1px solid red;
  display: inline-block;
  width: 150px;
  height: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: end;
`;

export const Ol = styled.li`
  display: block;
  & li {
    display: inline-block;
    list-style: none;
    margin-right: 10px;
    font-weight: bold;
  };
`;

export const ToolBarStyles = { backgroundColor: '#f9f9f9' };

export const ItemStyle = {};

export const OptionButton = (theme) => {
  console.log('theme', theme);
  return { color: theme.palette.primary.contrastText, marginRight: "30px" };
}
