import { ProductThumbnail } from '@/components/ProductThumbnail'
import { ProductItem } from '@/types/data.types'
import { Button } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import { useState } from 'react'

export type ProductProps = {
  product: ProductItem
  onClick?: () => void
}

export const Product = ({ product, onClick = () => {} }: ProductProps) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
    onClick()
  }

  return (
    <ProductButton
      onClick={handleClick}
      variant={isActive ? 'filled' : 'outlined'}
    >
      <ProductThumbnail
        thumbnail={product.thumbnail}
        title={product.title}
        width="100%"
        height="338px"
      />
      <ProductInfo>
        <ProductTitle className={isActive ? 'active' : ''}>
          {product.title}
        </ProductTitle>
        <ProductPrice className={isActive ? 'active' : ''}>
          ${product.price.toFixed(2)}
        </ProductPrice>
      </ProductInfo>
    </ProductButton>
  )
}

const activeColorStyles = `
  color: rgb(var(--lsd-text-primary));

  &.active {
    color: rgb(var(--lsd-text-secondary));
  }
`

const ProductButton = styled(Button)`
  padding: 14px;
  width: 100%;
  height: 430px;

  > span {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: underline;
  width: 100%;
`

const ProductTitle = styled.p`
  ${activeColorStyles}
`

const ProductPrice = styled.p`
  ${activeColorStyles}
`
