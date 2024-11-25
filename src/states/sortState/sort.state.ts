import { atom, useAtom } from 'jotai'

export enum SortOption {
  NEW_TO_OLD = 'new_to_old',
  OLD_TO_NEW = 'old_to_new',
  PRICE_LOW_TO_HIGH = 'price_low_to_high',
  PRICE_HIGH_TO_LOW = 'price_high_to_low',
}

export type SortState = {
  sortOption: SortOption
}

export const defaultSortState: SortState = {
  sortOption: SortOption.NEW_TO_OLD,
}

const sortAtom = atom<SortState>(defaultSortState)

const wrapSortState = (
  sort: SortState,
  setSort: (value: SortState) => void,
) => ({
  sort,
  get: () => sort,
  getSortOption: () => sort.sortOption,
  setSort: (value: SortState) => setSort(value),
  setSortOption: (sortOption: SortOption) => setSort({ ...sort, sortOption }),
})

export const useSortState = () => {
  const [sort, setSort] = useAtom(sortAtom)
  return wrapSortState(sort, setSort)
}

export default useSortState
