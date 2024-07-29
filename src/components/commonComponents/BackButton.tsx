import { TouchableOpacity } from 'react-native'
import ICBack from '../../assets/svg/back_arrow.svg'
import { FC } from 'react'
import { BackButtonProps } from '../types/components'

const BackButton: FC<BackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      tw="rounded-full bg-greyBgColor p-[16px] absolute z-[1] ml-[13px] mt-[35px]"
    >
      <ICBack />
    </TouchableOpacity>
  )
}
export default BackButton
