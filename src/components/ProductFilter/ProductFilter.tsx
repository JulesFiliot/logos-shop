import { breakpoints } from '@/configs/ui.configs'
import { ProductType } from '@/types/data.types'
import { Checkbox } from '@acid-info/lsd-react'
import styled from '@emotion/styled'

export type ProductFilterProps = {
  productType: ProductType | 'all'
  onFilterChange: (type: ProductType | 'all') => void
}

export const ProductFilter = ({
  productType,
  onFilterChange,
}: ProductFilterProps) => {
  return (
    <FilterContainer>
      <Checkbox
        size="large"
        checked={productType === 'all'}
        onChange={() => onFilterChange('all')}
      >
        All
      </Checkbox>
      <Checkbox
        size="large"
        checked={productType === ProductType.TSHIRT}
        onChange={() => onFilterChange(ProductType.TSHIRT)}
      >
        T-Shirts
      </Checkbox>
      <Checkbox
        size="large"
        checked={productType === ProductType.CAP}
        onChange={() => onFilterChange(ProductType.CAP)}
      >
        Caps
      </Checkbox>
    </FilterContainer>
  )
}

const FilterContainer = styled.div`
  display: flex;
  gap: 30px;

  @media (min-width: ${breakpoints.sm}px) {
    gap: 84px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    gap: 100px;
  }
`
