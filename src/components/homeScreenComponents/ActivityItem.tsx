import { FC, useCallback } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { ActivityItemProps } from '../types/components'
import ICPoint from '../../assets/svg/point.svg'
import ICStar from '../../assets/svg/star.svg'
import { StyledText, TextWithIcon } from '../'
import useShowImagePlaseholder from '../../hooks/useShowImagePlaseholder'

const ActivityItem: FC<ActivityItemProps> = ({ item, onPress }) => {
  const { photoUrl, name, location, rating, price, description, id } = item
  const { imageSrc, showPlaseholderImage, hidePlaseholderImage } =
    useShowImagePlaseholder(photoUrl)

  const onItemPress = useCallback(() => {
    onPress({ id, description, price, photoUrl, name })
  }, [])

  return (
    <TouchableOpacity onPress={onItemPress} tw="mb-[10px]">
      <Image
        tw="w-full h-[139] rounded-default"
        src={imageSrc}
        onLoadStart={showPlaseholderImage}
        onLoad={hidePlaseholderImage}
      />
      <View tw="rounded-default bg-greyBgColor h-[85] w-full flex-row justify-between p-[20px]">
        <View tw="justify-between">
          <StyledText tw="text-normal leading-normal">{name}</StyledText>

          <TextWithIcon Icon={ICPoint} text={location} tw={'ml-[6px]'} />
        </View>
        <View tw="justify-between items-end">
          <TextWithIcon
            Icon={ICStar}
            text={rating}
            tw={'ml-[2px] justify-end'}
          />

          <View tw="flex-row aligh-center">
            <StyledText tw="text-secondary leading-priceHomeScreen">
              ${price && `${price.toFixed(2)} `}
            </StyledText>
            <StyledText tw="text-small text-greyTextColor font-SF">
              / night
            </StyledText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ActivityItem
