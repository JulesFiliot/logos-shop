import { AcidIconDark } from '@/components/Icons/AcidIconDark'
import { AcidIconLight } from '@/components/Icons/AcidIconLight'
import { NavLink } from '@/components/NavLink'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { NavLinksItems } from '@/configs/data.configs'
import { uiConfigs } from '@/configs/ui.configs'
import useThemeState from '@/states/themeState/theme.state'
import {
  CloseIcon,
  IconButton,
  IconButtonGroup,
  MenuIcon,
} from '@acid-info/lsd-react'
import styled from '@emotion/styled'

export type NavBarMobileProps = {
  currentPath: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const NavBarMobile = ({
  currentPath,
  isOpen,
  setIsOpen,
}: NavBarMobileProps) => {
  const { toggleMode } = useThemeState()

  return (
    <MenuContainer>
      <Header>
        <div />
        <AcidIconLight className="dark-mode-hidden" />
        <AcidIconDark className="light-mode-hidden" />
        <ActionButtons>
          <IconButton
            size="medium"
            variant="outlined"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon color="primary" />
          </IconButton>
        </ActionButtons>
      </Header>

      <MenuPanel isOpen={isOpen}>
        <Header>
          <div />
          <AcidIconLight className="dark-mode-hidden" />
          <AcidIconDark className="light-mode-hidden" />
          <ActionButtons size="medium" variant="outlined">
            <ThemeSwitch toggle={toggleMode} />
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon color="primary" />
            </IconButton>
          </ActionButtons>
        </Header>
        <MenuLinks>
          {NavLinksItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              isActive={currentPath === item.href}
              label={item.label}
            />
          ))}
        </MenuLinks>
      </MenuPanel>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: block;
`

const MenuPanel = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: calc(100vw - 20px);
  padding-inline: 10px;
  background: rgb(var(--lsd-surface-primary));
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.2s;
  z-index: 100;
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: rgb(var(--lsd-text-primary));
`

const Header = styled.div`
  height: ${uiConfigs.navbarMobileHeight}px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`

const ActionButtons = styled(IconButtonGroup)`
  justify-self: end;
`
