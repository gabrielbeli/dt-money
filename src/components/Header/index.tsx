import { HeaderContainer, HeaderContent, NewTrasactionButton } from './styles'
import logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

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
            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
