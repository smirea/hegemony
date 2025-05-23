import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type React from 'react';

const queryClient = new QueryClient();

export const ReactQueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
