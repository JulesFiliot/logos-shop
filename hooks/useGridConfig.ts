import { shopGridConfigs } from '@/configs/ui.configs'
import { ShopGridConfig } from '@/types/ui.types'
import { useBreakpoint } from './useBreakpoint'

export const useGridConfig = (): ShopGridConfig => {
  const { isXl, isLg, isMd } = useBreakpoint()

  if (isXl) return shopGridConfigs.xl
  if (isMd || isLg) return shopGridConfigs.md
  return shopGridConfigs.sm
}
