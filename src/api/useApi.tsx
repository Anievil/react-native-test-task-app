import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchData, postData } from './api'

export const useFetchData = () => {
  return useQuery({
    queryKey: ['/activities'],
    queryFn: fetchData,
  })
}

export const usePostData = () => {
  return useMutation({
    mutationFn: postData,
    onError: err => {
      console.log(err, 'Error')
    },
    onSuccess: ({ message }) => {
      console.log(message)
    },
  })
}
