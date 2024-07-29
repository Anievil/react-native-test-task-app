import { FC } from 'react'
import { View } from 'react-native'
import { StyledText } from '../'
import { TextWithIconProps } from '../types/components'

const TextWithIcon: FC<TextWithIconProps> = ({ Icon, text, tw }) => {
  return (
    <View tw="flex-row justify-center">
      <Icon />
      <StyledText tw={`text-small font-SF ${tw}`}>{text}</StyledText>
    </View>
  )
}

export default TextWithIcon
