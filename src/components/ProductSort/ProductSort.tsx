import { SortOption } from '@/states/sortState/sort.state'
import { Dropdown } from '@acid-info/lsd-react'
import styled from '@emotion/styled'

export type ProductSortProps = {
  sortOption: SortOption
  onSortChange: (option: SortOption) => void
}

const sortOptions = [
  {
    name: 'Newest to Oldest',
    value: SortOption.NEW_TO_OLD,
  },
  {
    name: 'Oldest to Newest',
    value: SortOption.OLD_TO_NEW,
  },
  {
    name: 'Price: Low to High',
    value: SortOption.PRICE_LOW_TO_HIGH,
  },
  {
    name: 'Price: High to Low',
    value: SortOption.PRICE_HIGH_TO_LOW,
  },
]

export const ProductSort = ({ sortOption, onSortChange }: ProductSortProps) => {
  return (
    <DropdownStyled
      onChange={(value) => onSortChange(value as SortOption)}
      options={sortOptions}
      size="medium"
      value={sortOption}
      variant="outlined"
    />
  )
}

const DropdownStyled = styled(Dropdown)`
  width: 100%;
`
