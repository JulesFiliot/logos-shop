import { useGridConfig } from '@/../hooks/useGridConfig'
import { ProductSort } from '@/components/ProductSort'
import { breakpoints } from '@/configs/ui.configs'
import { SortOption, useSortState } from '@/states/sortState/sort.state'
import styled from '@emotion/styled'

export const ProductSortContainer = () => {
  const sortState = useSortState()
  const sortOption = sortState.getSortOption()
  const gridConfig = useGridConfig()

  const containerWidth = gridConfig.columns * gridConfig.cellWidth

  const handleSortChange = (option: SortOption) => {
    sortState.setSortOption(option)
  }

  return (
    <SortContainer containerWidth={containerWidth}>
      <ProductSort sortOption={sortOption} onSortChange={handleSortChange} />
    </SortContainer>
  )
}

const SortContainer = styled.div<{ containerWidth: number }>`
  width: ${({ containerWidth }) => containerWidth}px;

  @media (min-width: ${breakpoints.md}px) {
    width: 200px;
  }
`
