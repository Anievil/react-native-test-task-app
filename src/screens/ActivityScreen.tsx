import { FC, useCallback } from 'react'
import { Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  BackButton,
  StyledText,
  LongButton,
  HorizontalRule,
} from '../components'
import { RootStackScreenProps } from './types/root'
import { usePostData } from '../api/useApi'
import useShowImagePlaseholder from '../hooks/useShowImagePlaseholder'

const ActivityScreen: FC<RootStackScreenProps<'ActivityScreen'>> = ({
  navigation,
  route: { params },
}) => {
  const { name, photoUrl, price, description, id } = params

  const { imageSrc, showPlaseholderImage, hidePlaseholderImage } =
    useShowImagePlaseholder(photoUrl)

  const mutation = usePostData()

  const onPressBackButton = useCallback(() => {
    navigation.canGoBack() && navigation.goBack()
  }, [])

  const addToFavorites = useCallback(() => {
    id && mutation.mutate(id)
  }, [id])

  return (
    <SafeAreaView tw="flex-[1]">
      <View tw="flex-[1]">
        <BackButton onPress={onPressBackButton} />
        <Image
          tw={'w-screen h-[60%] rounded-b-default'}
          src={imageSrc}
          onLoadStart={showPlaseholderImage}
          onLoad={hidePlaseholderImage}
        />
        <View tw="px-[20px] mt-[20px]">
          <StyledText tw="text-title leading-title">{name}</StyledText>
          <View tw="flex-row justify-between items-center my-[20px]">
            <StyledText tw="text-normal leading-big">
              ${price && price.toFixed(2)}
            </StyledText>
            <StyledText tw="text-greyTextColor text-small leading-priceDesc">
              Included taxes and fees
            </StyledText>
          </View>
          <HorizontalRule />

          <View tw="my-[20px]">
            <StyledText tw="text-normal leading-big">Description</StyledText>
            <StyledText tw="text-descTextColor text-secondary leading-descText mt-[10px]">
              {description}
            </StyledText>
          </View>
          <HorizontalRule />
        </View>
      </View>
      <LongButton onPress={addToFavorites} text={'Add to Favorites'} />
    </SafeAreaView>
  )
}

export default ActivityScreen
