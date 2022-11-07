import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </QueryClientProvider>
  );
};

export default App;
