import { useCallback, useRef, useState } from 'react'
import { defaultImageUrl } from '../constants/defaultVariables'

const useShowImagePlaseholder = (photoUrl: string | undefined) => {
  const [imageSrc, setImageSrc] = useState(photoUrl)

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const showPlaseholderImage = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setImageSrc(defaultImageUrl)
    }, 500)
  }, [imageSrc])

  const hidePlaseholderImage = useCallback(() => {
    if (imageSrc !== defaultImageUrl && timerRef?.current) {
      clearTimeout(timerRef.current)
      setImageSrc(photoUrl)
    }
  }, [photoUrl, imageSrc])

  return { imageSrc, showPlaseholderImage, hidePlaseholderImage }
}

export default useShowImagePlaseholder
