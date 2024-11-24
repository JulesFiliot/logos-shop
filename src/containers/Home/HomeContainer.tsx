import { Button } from '@acid-info/lsd-react'
import React from 'react'

export type HomePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const HomeContainer: React.FC<HomePageProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <Button>Hello</Button>
    </div>
  )
}
