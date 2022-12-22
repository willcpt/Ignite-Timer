import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>logo</span>
      <nav>
        <NavLink to="/" title="Timer">
          timer
        </NavLink>
        <NavLink to="/history" title="Histórico">
          history
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
