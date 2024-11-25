import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

type GridProps = {
  columns?: number
  gap?: string
}

export const Grid = ({
  columns = 2,
  gap = '8px',
  children,
}: PropsWithChildren & GridProps) => {
  return (
    <GridContainer columns={columns} gap={gap}>
      {children}
    </GridContainer>
  )
}

const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap};
  width: 100%;
  position: relative;
  margin: 0 auto;

  ${(props) =>
    props.gap &&
    ['0', '0px'].includes(props.gap) &&
    `
    gap: 0;
    
    > * {
      margin-right: -1px;
      margin-bottom: -1px;
      position: relative;

      &:not(:nth-child(${props.columns}n)) {
        border-right: none;
      }

      &:not(:nth-last-child(-n+${props.columns})) {
        border-bottom: none;
      }

      &:last-child:not(:nth-child(${props.columns}n)) {
        border-right: 1px solid rgb(var(--lsd-border-primary));
        width: calc(100% + 1px);
      }
    }
  `}
`
