import { FC } from 'react'
import { SvgProps } from 'react-native-svg'
import { activityDataTypes } from 'api/apiTypes'
import { ActivitiesGet200ResponseInner } from '../../../generated'

export type ActivityItemProps = {
  item: ActivitiesGet200ResponseInner
  onPress: (item: activityDataTypes) => void
}

export type BackButtonProps = {
  onPress: () => void
}

export type LongButtonProps = {
  onPress: () => void
  text: string
}

export type TextWithIconProps = {
  Icon: FC<SvgProps>
  text?: string | number
  tw: string
}
