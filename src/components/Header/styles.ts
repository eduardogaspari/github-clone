import styled, { css } from 'styled-components'
import { GiHamburgerMenu as Burger } from 'react-icons/gi'
import { FaGithub as GitHub } from 'react-icons/fa'
import { AiOutlineBell as Bell, AiOutlinePlus as Plus } from 'react-icons/ai'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
  background: var(--header);
  padding: 15px 6px;

  @media (min-width: 847px) {
    padding: 15px 35px;
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  @media (min-width: 847px) {
    width: unset;
    justify-content: space-around;
  }
`

export const RightWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const GitHubLogo = styled(GitHub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`

export const SearchForm = styled.form`
  display: none;

  @media (min-width: 847px) {
    display: flex;
    padding-left: 16px;

      input {
      background: var(--search);
      outline: 0;
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 6px 16px;
      color: var(--primary);
      transition: all .3s ease-in-out;

      &:focus {
        border: 1px solid var(--link);
      }
    }
  }
`

export const NavLinks = styled.ul`
  display: none;

  @media (min-width: 847px) {
    display: flex;
    justify-content: center;
    align-items: center;

      > li {
      margin: 0 15px;

      > a {
        color: var(--primary);
        text-decoration: none;
        font-weight: bold;
        font-size: 14px;

        &:hover {
          opacity: .6;
        }
      }
    }
  }
`

const iconCSS = css`
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin: 0 8px;
  flex-shrink: 0;
  fill: var(--primary);

  &:hover {
    opacity: .7;
  }
`

export const BurgerMenu = styled.div`
  @media (min-width: 847px) {
    display: none;
  }
`

export const BurgerIcon = styled(Burger)`
  ${iconCSS}
`

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BellIcon = styled(Bell)`
  ${iconCSS}
`

export const PlusIcon = styled(Plus)`
  display: none;

  @media (min-width: 847px) {
    display: flex;
    ${iconCSS};
  }
`

export const ProfileIcon = styled.div`
  display: none;

  @media (min-width: 847px) {
    display: unset;
    
      > img {
      ${iconCSS}
      border-radius: 50%;
    }
  }
`
