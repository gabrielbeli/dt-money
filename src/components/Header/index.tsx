import { HeaderContainer, HeaderContent, NewTrasactionButton } from "./styles";
import logo from "../../assets/logo.svg"

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="logo da aplicação dt money" />
          <NewTrasactionButton>Nova Transação</NewTrasactionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}