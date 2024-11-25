import { useBreakpoint } from '@/../hooks/useBreakpoint'
import { NavBar, NavBarMobile } from '@/components/NavBar'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const NavBarContainer = () => {
  const isMobile = useBreakpoint().isXs
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isMobile ? (
        <NavBarMobile
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentPath={pathname}
        />
      ) : (
        <NavBar currentPath={pathname} />
      )}
    </>
  )
}
