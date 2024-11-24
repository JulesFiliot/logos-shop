import React from 'react'

export type ShopPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ShopContainer: React.FC<ShopPageProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h1>Products</h1>
    </div>
  )
}
