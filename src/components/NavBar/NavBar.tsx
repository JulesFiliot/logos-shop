import { AcidIcon } from '@/components/Icons/AcidIcon'
import { NavLink } from '@/components/NavLink'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { NavLinksItems } from '@/configs/data.configs'
import { uiConfigs } from '@/configs/ui.configs'
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
        <AcidIcon />
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
  padding-left: ${({ side }) => (side === 'left' ? '6rem' : '5rem')};
  padding-right: ${({ side }) => (side === 'left' ? '5rem' : '6rem')};
`

const ThemeSwitchWrapper = styled.div`
  position: absolute;
  right: 10px;
  height: 100%;
  display: flex;
  align-items: center;
`

const ThemeSwitchStyled = styled(ThemeSwitch)`
  height: 34px;
  width: 34px;
`
