import React from 'react';
import Link from 'gatsby-link';
import {Flex, Box} from 'grid-styled';

import {Text} from 'components/typography';
import {Inner} from 'layouts';
import StyledSwitch from './theme-switch';

const StyledNav = Flex.extend`
  width: 100%;
  padding: 32px 0 24px;
  background-color: ${props => props.theme.colors.primary};
  z-index: 10;
`;

const Nav = Box.extend`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 0 8px;

      &:first-of-type {
        padding-left: 0;
      }
    }
  }

  a {
    color: ${props => props.theme.colors.text};
    border-bottom: 0;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.link};
    }
  }
`;

export default ({onThemeChange, selectedTheme}) => (
  <StyledNav is="header" justify="space-between">
    <Inner>
      <Nav is="nav">
        <ul>
          <li>
            <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
              <Link to="/">Home</Link>
            </Text>
          </li>
          <li>
            <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
              <Link to="/profile/">Profile</Link>
            </Text>
          </li>
          <li>
            <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
              <a
                href="https://twitter.com/alexjpate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Text>
          </li>
        </ul>
        <StyledSwitch value={selectedTheme} onClick={onThemeChange} />
      </Nav>
    </Inner>
  </StyledNav>
);
