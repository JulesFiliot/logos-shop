import { useIsMobile } from '@/../hooks/useIsMobile'
import { Grid } from '@/components/Grid'
import { Product } from '@/components/Product'
import { ShopData } from '@/types/data.types'
import styled from '@emotion/styled'

interface ShopContainerProps {
  shopData: ShopData
}

export const ShopContainer = ({ shopData }: ShopContainerProps) => {
  const isMobile = useIsMobile()

  return (
    <Container>
      <h1>Products</h1>
      <Grid columns={isMobile ? 1 : 4} gap="0">
        {shopData.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  )
}

const Container = styled.div``
