import { FC, useCallback } from 'react'
import { FlatList, ListRenderItem, RefreshControl, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityItem, StyledText } from '../components'
import { RootStackScreenProps } from './types/root'
import { useFetchData } from '../api/useApi'
import { ActivitiesGet200ResponseInner } from '../../generated'
import { activityDataTypes } from '../api/apiTypes'

const HomeScreen: FC<RootStackScreenProps<'Home'>> = ({ navigation }) => {
  const { data, refetch, isLoading } = useFetchData()

  const onActivityItemPress = useCallback((activityInfo: activityDataTypes) => {
    navigation.navigate('ActivityScreen', activityInfo)
  }, [])

  const renderItem: ListRenderItem<ActivitiesGet200ResponseInner> = useCallback(
    ({ item }) => <ActivityItem item={item} onPress={onActivityItemPress} />,
    [],
  )

  const keyExtractor = useCallback(
    (item: ActivitiesGet200ResponseInner, index: number) =>
      item.id && item.name ? item.id + item.name : index.toString(),
    [],
  )

  return (
    <SafeAreaView tw="flex-[1]">
      <View tw="px-[20px] flex-[1]">
        <StyledText className="text-normal leading-big text-center mt-[18.5] mb-[37.5]">
          Activities
        </StyledText>

        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          style={{ flex: 1 }}
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
