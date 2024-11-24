import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

export type ArticlesPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ArticlesContainer: React.FC<ArticlesPageProps> = ({
  children,
  ...props
}) => {
  return (
    <Container {...props}>
      <h1>Articles</h1>
    </Container>
  )
}

const Container = styled.div`
  @media (max-width: ${breakpoints.lg}px) {
    margin-inline: 10px;
  }
`
