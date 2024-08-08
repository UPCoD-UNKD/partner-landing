import { useSearchParams } from 'react-router-dom'

export const useAuthMode = (parameter: string) => {
  const [searchParams] = useSearchParams()
  return searchParams.get(parameter)
}
