import logo from 'shared/assets/img/logo.svg'
import { Wrapper } from './Wrapper'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { NavLink } from './NavItem'

export default function Header() {
  return (
    <Wrapper>
      <Logo src={logo} alt='logo' />
      <Nav>
        <NavLink href='#'>Авторизуватися</NavLink>
        <NavLink href='#'>почати</NavLink>
      </Nav>
    </Wrapper>
  )
}
