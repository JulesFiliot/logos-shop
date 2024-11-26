import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/articles',
      permanent: true,
    },
  }
}

export default function IndexPage() {
  return null
}
