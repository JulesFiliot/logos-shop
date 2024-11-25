import { breakpoints } from '@/configs/ui.configs'
import useWindowSize from './useWindowSize'

export const useBreakpoint = () => {
  const { width } = useWindowSize()

  return {
    isXs: width < breakpoints.sm,
    isSm: width >= breakpoints.sm && width < breakpoints.md,
    isMd: width >= breakpoints.md && width < breakpoints.lg,
    isLg: width >= breakpoints.lg && width < breakpoints.xl,
    isXl: width >= breakpoints.xl,
  }
}
