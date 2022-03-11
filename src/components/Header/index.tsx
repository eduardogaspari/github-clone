import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
  Container,
  LeftWrapper,
  RightWrapper,
  GitHubLogo,
  SearchForm,
  NavLinks,
  NavIcons,
  BurgerIcon,
  BellIcon,
  PlusIcon,
  ProfileIcon,
  BurgerMenu
} from './styles'

const Header: React.FC = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    navigate('/' + search.toLocaleLowerCase().trim())
  }

  return (
    <Container>
      <LeftWrapper>

        <BurgerMenu>
          <BurgerIcon />
        </BurgerMenu>

        <div>
          <Link to="/">
            <GitHubLogo />
          </Link>
        </div>

        <SearchForm onSubmit={handleSubmit}>
          <input
            placeholder="Enter Username or Repo..."
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
          />
        </SearchForm>

        <NavLinks>
          <li><a href="#">Pull requests</a></li>
          <li><a href="#">Issues</a></li>
          <li><a href="#">Marktplace</a></li>
          <li><a href="#">Explore</a></li>
        </NavLinks>
      </LeftWrapper>

      <RightWrapper>
        <NavIcons>
          <BellIcon />
          <PlusIcon />
          <ProfileIcon>
            <img src="/favicon.ico" alt="Profile" />
          </ProfileIcon>
        </NavIcons>
      </RightWrapper>

    </Container>
  )
}

export default Header
