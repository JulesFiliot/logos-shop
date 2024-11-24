import { useIsMobile } from '@/../hooks/useIsMobile'
import { NavBar, NavBarMobile } from '@/components/NavBar'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const NavBarContainer = () => {
  const isMobile = useIsMobile()
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
