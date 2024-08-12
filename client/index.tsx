import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { ConvexReactClient } from "convex/react";
import { ConvexAuthProvider } from '@convex-dev/auth/react';

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

import router from './router.tsx'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <ConvexAuthProvider client={convex}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ConvexAuthProvider>
  )
})
