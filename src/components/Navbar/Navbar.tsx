import React, { FC, useState, useCallback, useEffect } from 'react';
import {
  breakpoint,
  BurgerIcon,
  MenuButton,
  Nav,
  NavBrandLink,
  NavContainer,
  NavItems,
  SearchButton,
  SearchInput,
  StyledLink,
} from './Navbar.styles';
import { FaSearch } from 'react-icons/fa';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const Navbar: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [displaySearch, setDisplaySearch] = useState<boolean>(false);
  const [darkNav, setDarkNav] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  const changeBackground = useCallback(() => {
    if (window.scrollY >= 20) return setDarkNav(true);
    setDarkNav(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  const queryLogo = graphql`
    query {
      file(name: { eq: "hackflix-logo" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `;
  const { file } = useStaticQuery(queryLogo);
  const logo = getImage(file);

  return (
    <Nav>
      <NavContainer>
        <NavBrandLink to="/">
          <GatsbyImage
            className="logo-image"
            image={logo!}
            alt="&copy; Hackflix logo"
          />
        </NavBrandLink>
        <NavItems className={openMenu ? 'expanded' : ''}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavItems>
        {displaySearch && (
          <SearchInput
            id="searchInput"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
            placeholder="Titles"
          />
        )}
        <SearchButton
          className={displaySearch ? 'show' : ''}
          onClick={() => setDisplaySearch(!displaySearch)}
        >
          <FaSearch />
        </SearchButton>
        <MenuButton
          onClick={() => {
            setOpenMenu(!openMenu);
            setDisplaySearch(false);
          }}
        >
          <BurgerIcon className={openMenu ? 'open' : ''} />
        </MenuButton>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
