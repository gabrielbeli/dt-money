import { HeaderContainer, HeaderContent, NewTrasactionButton } from "./styles";
import logo from "../../assets/logo.svg"
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="logo da aplicação dt money" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTrasactionButton>Nova Transação</NewTrasactionButton>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}