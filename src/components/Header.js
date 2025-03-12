import React from 'react';
import styled from '@emotion/styled';

const HeaderWrap = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 2rem;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`; 

const Header = ({title}) => (
  <HeaderWrap>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderWrap>
);

export default Header;