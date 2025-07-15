import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {useState, type ReactNode} from 'react';

const queryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
};

const ReactQueryProvider = ({children}: {children: ReactNode}) => {
  const [queryClientStore] = useState(
    () => new QueryClient(queryClientOptions),
  );
  return (
    <QueryClientProvider client={queryClientStore}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
