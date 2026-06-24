import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export function useOdooList(key, serviceFn, domain, options = {}) {
  return useQuery({
    queryKey: [key, domain],
    queryFn: () => serviceFn(domain),
    ...options,
  })
}

export function useOdooMutation(mutationFn, { invalidateKey, ...options } = {}) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn,
    onSuccess: () => {
      if (invalidateKey) queryClient.invalidateQueries({ queryKey: [invalidateKey] })
    },
    ...options,
  })
}
