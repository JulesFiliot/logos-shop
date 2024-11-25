import { SEO } from '@/components/SEO'
import { ShopContainer } from '@/containers/Shop'
import shopData from '@/data/shop.data.json'
import { ProductType, ShopData } from '@/types/data.types'
import { isValidProductType } from '@/utils/product.utils'
import { GetStaticProps } from 'next'

interface ShopPageProps {
  shopData: ShopData
}

const REVALIDATE_TIME_SECONDS = 3600

export default function ShopPage({ shopData }: ShopPageProps) {
  return (
    <>
      <SEO />
      <ShopContainer shopData={shopData} />
    </>
  )
}

// I use getStaticProps with revalidate to simulate a real life scenario
// where the data is fetched with an external API.
// I revalidate data every hour since I suppose it doesn't change that often.
export const getStaticProps: GetStaticProps<ShopPageProps> = async () => {
  const processedShopData: ShopData = {
    products: shopData.products
      .filter((product) => isValidProductType(product.type))
      .map((product) => ({
        ...product,
        type: product.type as ProductType,
      })),
  }

  return {
    props: {
      shopData: processedShopData,
    },
    revalidate: REVALIDATE_TIME_SECONDS,
  }
}
