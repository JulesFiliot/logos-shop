import { isVideo } from '@/utils/product.utils'
import styled from '@emotion/styled'

type ProductThumbnailProps = {
  thumbnail: string
  title?: string
  width?: string | number
  height?: string | number
}

export const ProductThumbnail = ({
  thumbnail,
  title,
  width = '100%',
  height = '100%',
}: ProductThumbnailProps) => {
  return (
    <ThumbnailContainer style={{ width, height }}>
      {isVideo(thumbnail) ? (
        <StyledVideo src={thumbnail} autoPlay loop muted playsInline />
      ) : (
        <StyledImage src={thumbnail} alt={title} />
      )}
    </ThumbnailContainer>
  )
}

const rendererStyle = `
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledImage = styled.img`
  ${rendererStyle}
`

const StyledVideo = styled.video`
  ${rendererStyle}
`
