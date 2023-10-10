import logo from 'shared/assets/img/logo.svg'
import { Wrapper } from './Wrapper'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { NavLink } from './NavItem'
import { useMediaQuery } from 'usehooks-ts'
import { BurgerButton } from './BurgerButton'

export default function Header() {
  const isTablet = useMediaQuery('(max-width: 738px)')

  return (
    <Wrapper>
      <Logo src={logo} alt='logo' />
      {!isTablet && <Nav>
        <NavLink href='#'>Авторизуватися</NavLink>
        <NavLink href='#'>почати</NavLink>
      </Nav>}

      {isTablet && <BurgerButton />}
    </Wrapper>
  )
}
