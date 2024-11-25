export enum ProductType {
  CAP = 'cap',
  TSHIRT = 'tshirt',
}

export interface ProductItem {
  id: number
  title: string
  price: number
  type: ProductType
  createdAt: string
  thumbnail: string
}

export interface ShopData {
  products: ProductItem[]
}
