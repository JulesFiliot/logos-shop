import { FilteredProductType } from '@/types/data.types'
import { atom, useAtom } from 'jotai'

export type FilterState = {
  productType: FilteredProductType
}

export const defaultFilterState: FilterState = {
  productType: 'all',
}

const filterAtom = atom<FilterState>(defaultFilterState)

const wrapFilterState = (
  filter: FilterState,
  setFilter: (value: FilterState) => void,
) => ({
  filter,
  get: () => filter,
  getProductType: () => filter.productType,
  setFilter: (value: FilterState) => setFilter(value),
  setProductType: (productType: FilteredProductType) =>
    setFilter({ ...filter, productType }),
})

export const useFilterState = () => {
  const [filter, setFilter] = useAtom(filterAtom)
  return wrapFilterState(filter, setFilter)
}

export default useFilterState
