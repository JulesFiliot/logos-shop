import { useGridConfig } from '@/../hooks/useGridConfig'
import { Grid } from '@/components/Grid'
import { Product } from '@/components/Product'
import { breakpoints } from '@/configs/ui.configs'
import { ProductFilterContainer } from '@/containers/ProductFilterContainer'
import { ProductSortContainer } from '@/containers/ProductSortContainer'
import { useFilterState } from '@/states/filterState/filter.state'
import { SortOption, useSortState } from '@/states/sortState/sort.state'
import { ShopData } from '@/types/data.types'
import { ShopGridConfig } from '@/types/ui.types'
import { Badge } from '@acid-info/lsd-react'
import styled from '@emotion/styled'

interface ShopContainerProps {
  shopData: ShopData
}

export const ShopContainer = ({ shopData }: ShopContainerProps) => {
  const gridConfig = useGridConfig()
  const filterState = useFilterState()
  const sortState = useSortState()
  const { productType } = filterState.filter
  const { sortOption } = sortState.sort

  const containerWidth = gridConfig.columns * gridConfig.cellWidth

  const filteredProducts = shopData.products.filter((product) =>
    productType === 'all' ? true : product.type === productType,
  )
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case SortOption.OLD_TO_NEW:
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      case SortOption.PRICE_LOW_TO_HIGH:
        return a.price - b.price
      case SortOption.PRICE_HIGH_TO_LOW:
        return b.price - a.price
      case SortOption.NEW_TO_OLD:
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  return (
    <Container containerWidth={containerWidth}>
      <Header>
        <HeaderTitle>
          <h1>Products</h1>
          <Badge size="small" variant="filled">
            {sortedProducts.length}
          </Badge>
        </HeaderTitle>
        <ProductFilterContainer />
      </Header>
      <Content>
        <ProductSortContainer />
        <Grid
          columns={gridConfig.columns}
          gap="0"
          width={`${containerWidth}px`}
        >
          {sortedProducts.map((product) => (
            <ProductCell key={product.id} gridConfig={gridConfig}>
              <Product product={product} />
            </ProductCell>
          ))}
        </Grid>
      </Content>
    </Container>
  )
}

const Container = styled.div<{ containerWidth: number }>`
  width: ${({ containerWidth }) => containerWidth}px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 55px;
  margin-top: 8px;
  margin-bottom: 50px;

  @media (min-width: ${breakpoints.sm}px) {
    flex-direction: column-reverse;
    align-items: stretch;
    row-gap: 120px;
    margin-top: 30px;
  }
`

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  margin-bottom: 50px;

  @media (min-width: ${breakpoints.sm}px) {
    align-items: stretch;
    row-gap: 24px;
  }
`

const ProductCell = styled.div<{ gridConfig: ShopGridConfig }>`
  border: 1px solid rgb(var(--lsd-border-primary));
  width: ${({ gridConfig }) => gridConfig.cellWidth}px;
  height: ${({ gridConfig }) => gridConfig.cellHeight}px;
`
