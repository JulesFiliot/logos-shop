import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

export type GridProps = {
  columns?: number
  gap?: string
  width?: string
}

export const Grid = ({
  columns = 2,
  gap = '8px',
  children,
  width = '100%',
}: PropsWithChildren & GridProps) => {
  return (
    <GridContainer columns={columns} gap={gap} width={width}>
      {children}
    </GridContainer>
  )
}

const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  position: relative;
  margin: 0 auto;

  ${(props) =>
    props.gap &&
    ['0', '0px'].includes(props.gap) &&
    `    
    > * {
      margin-right: -1px;
      margin-bottom: -1px;
      position: relative;

      &:not(:nth-of-type(${props.columns}n)) {
        border-right: none;
      }

      &:not(:nth-last-of-type(-n+${props.columns})) {
        border-bottom: none;
      }

      &:last-child:not(:nth-of-type(${props.columns}n)) {
        border-right: 1px solid rgb(var(--lsd-border-primary));
      }
    }
  `}
`
