import { breakpoints } from '@/configs/ui.configs'
import { NavBarContainer } from '@/containers/NavBarContainer'
import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

export default function DefaultLayout(props: PropsWithChildren) {
  return (
    <Root>
      <NavBarContainer />
      <Main>{props.children}</Main>
    </Root>
  )
}

const Root = styled.div`
  @media (max-width: ${breakpoints.lg}px) {
    margin-inline: 10px;
  }

  @media (min-width: calc(${breakpoints.lg}px + 1px)) {
    margin-inline: 104px;
  }
`

const Main = styled.main``
