import { ReactNode } from 'react'

export type FooterItem = {
  label: string | null
  href: string
  icon?: ReactNode
  key?: string
}

export type FooterGroup = {
  title: string | null
  key?: string
  links: FooterItem[]
}

export type ShopGridConfig = {
  columns: number
  cellWidth: number
  cellHeight: number
}

export type ShopGridConfigs = {
  xl: ShopGridConfig
  md: ShopGridConfig
  sm: ShopGridConfig
}
