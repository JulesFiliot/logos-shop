import React from 'react'

export type AboutPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const AboutContainer: React.FC<AboutPageProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h1>About</h1>
    </div>
  )
}
