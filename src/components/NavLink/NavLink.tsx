import { useBreakpoint } from '@/../hooks/useBreakpoint'
import { Button } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Link from 'next/link'

export type NavLinkProps = {
  href: string
  onClick?: () => void
  isActive?: boolean
  label: string
}

export const NavLink = ({
  href,
  onClick = () => {},
  isActive = false,
  label,
}: NavLinkProps) => {
  const isMobile = useBreakpoint().isXs

  return (
    <LinkStyled href={href} onClick={onClick}>
      <LinkButton
        size={isMobile ? 'large' : 'medium'}
        variant={isActive ? 'filled' : 'outlined'}
        className={isMobile ? 'mobile' : ''}
      >
        {label}
      </LinkButton>
    </LinkStyled>
  )
}

const LinkButton = styled(Button)`
  width: 100%;

  &.mobile {
    border: none;
    text-align: left;
  }
`

const LinkStyled = styled(Link)`
  width: 100%;
  }
`
