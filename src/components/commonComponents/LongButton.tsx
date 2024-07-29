import { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import { LongButtonProps } from '../types/components'
import { StyledText } from '../'

const LongButton: FC<LongButtonProps> = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      tw="mx-[20px] bg-black py-[20px] mb-[5px] rounded-full"
    >
      <StyledText tw="text-white text-normal leading-[18.5px] text-center">
        {text}
      </StyledText>
    </TouchableOpacity>
  )
}

export default LongButton
