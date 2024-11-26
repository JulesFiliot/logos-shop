import { AcidIconDark } from '@/components/Icons/AcidIconDark'
import { AcidIconLight } from '@/components/Icons/AcidIconLight'
import { NavLink } from '@/components/NavLink'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { NavLinksItems } from '@/configs/data.configs'
import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import useThemeState from '@/states/themeState/theme.state'
import { ButtonGroup } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import { useMemo } from 'react'

export type NavBarProps = {
  currentPath: string
}

export const NavBar = ({ currentPath }: NavBarProps) => {
  const { toggleMode } = useThemeState()
  const [leftLinks, rightLinks] = useMemo(() => {
    const midpoint = Math.floor(NavLinksItems.length / 2)
    return [NavLinksItems.slice(0, midpoint), NavLinksItems.slice(midpoint)]
  }, [])

  return (
    <Container>
      <NavLinkGroup links={leftLinks} side="left" currentPath={currentPath} />
      <LogoWrapper>
        <AcidIconLight className="dark-mode-hidden" />
        <AcidIconDark className="light-mode-hidden" />
      </LogoWrapper>
      <NavLinkGroup links={rightLinks} side="right" currentPath={currentPath} />
      <ThemeSwitchWrapper>
        <ThemeSwitchStyled size="medium" toggle={toggleMode} />
      </ThemeSwitchWrapper>
    </Container>
  )
}

type NavLinkGroupProps = {
  links: typeof NavLinksItems
  side: 'left' | 'right'
  currentPath: string
}

const NavLinkGroup = ({ links, side, currentPath }: NavLinkGroupProps) => (
  <StyledButtonGroup side={side} size="medium" variant="outlined">
    {links.map((link) => (
      <NavLink
        key={link.href}
        href={link.href}
        isActive={currentPath === link.href}
        label={link.label}
      />
    ))}
  </StyledButtonGroup>
)

const Container = styled.div`
  width: 100%;
  height: ${uiConfigs.navbarRenderedHeight}px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  position: relative;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButtonGroup = styled(ButtonGroup)<{ side: 'left' | 'right' }>`
  display: flex;
  justify-content: center;
  ${({ side }) => side === 'right' && 'padding-right: calc(34px + 10px);'}
  padding-${({ side }) => (side === 'left' ? 'right' : 'left')}: 64px;

  @media (max-width: ${breakpoints.lg}px) {
    padding-${({ side }) => (side === 'left' ? 'right' : 'left')}: 32px;
  }
`

const ThemeSwitchWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
`

const ThemeSwitchStyled = styled(ThemeSwitch)`
  height: 34px;
  width: 34px;
`
