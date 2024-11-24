import { breakpoints } from '@/configs/ui.configs'
import useWindowSize from './useWindowSize'

export const useIsMobile = () => {
  const windowSize = useWindowSize()
  return windowSize.width < breakpoints.sm
}
