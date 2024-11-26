import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/shop',
      permanent: true,
    },
  }
}

export default function HomePage() {
  return null
}
