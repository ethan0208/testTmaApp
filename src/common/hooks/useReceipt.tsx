import { useQuery } from '@tanstack/react-query';
import { useViem } from './useViem';

interface ParamsType {
  key: string;
  hashData: `0x${string}`;
  enabled: boolean;
}

export const useReceipt = (params: ParamsType) => {
  const { client } = useViem();
  return useQuery({
    queryKey: ['receipt', params.hashData, params.key],
    queryFn: async () =>
      await client.getTransactionReceipt({
        hash: params.hashData,
      }),
    enabled: params.enabled,
    refetchInterval: 1000,
  });
};
