import React from 'react'

export type MediaPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const MediaContainer: React.FC<MediaPageProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h1>Media</h1>
    </div>
  )
}
