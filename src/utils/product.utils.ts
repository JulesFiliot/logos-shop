import { ProductType } from '@/types/data.types'

export const isValidProductType = (type: string): type is ProductType => {
  return Object.values(ProductType).includes(type as ProductType)
}

export const isVideo = (thumbnail: string) => {
  return thumbnail.toLowerCase().endsWith('.webm')
}
