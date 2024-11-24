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
    <div {...props}>
      <h1>Articles</h1>
    </div>
  )
}
