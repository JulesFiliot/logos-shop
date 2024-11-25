import { ProductFilter } from '@/components/ProductFilter'
import { useFilterState } from '@/states/filterState/filter.state'
import { ProductType } from '@/types/data.types'

export const ProductFilterContainer = () => {
  const filterState = useFilterState()
  const productType = filterState.getProductType()

  const handleFilterChange = (type: ProductType | 'all') => {
    filterState.setProductType(type)
  }

  return (
    <ProductFilter
      productType={productType}
      onFilterChange={handleFilterChange}
    />
  )
}
