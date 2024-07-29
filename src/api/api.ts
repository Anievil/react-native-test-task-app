import Config from 'react-native-config'
import { DefaultApi } from '../../generated/apis/'
import { Configuration } from '../../generated/runtime'

const config = new Configuration({
  basePath: Config.API_URL,
})

const api = new DefaultApi(config)

export const fetchData = async () => {
  const response = await api.activitiesGet()
  return response
}

export const postData = async (id: number) => {
  const response = await api.favoritesPost({ favoritesPostRequest: { id } })
  return response
}
