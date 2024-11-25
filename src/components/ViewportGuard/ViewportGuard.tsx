import styled from '@emotion/styled'
import { PropsWithChildren, useEffect, useState } from 'react'

export const ViewportGuard = ({ children }: PropsWithChildren) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return <FadeIn isVisible={isClient}>{children}</FadeIn>
}

const FadeIn = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`
