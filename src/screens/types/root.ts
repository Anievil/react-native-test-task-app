import { StackScreenProps } from '@react-navigation/stack'
import { activityDataTypes } from 'api/apiTypes'

export type RootStackParamList = {
  Home: undefined
  ActivityScreen: activityDataTypes
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
