import { createElement, FunctionComponent, lazy, Suspense } from "react"
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

const ce = (load: Promise<{
  default: React.ComponentType<FunctionComponent>;
}>) => {
  return <Suspense fallback=''>
    {createElement(lazy(() => load))}
  </Suspense>
}

const route: RouteObject[] = [
  {
    path: '/',
    element: ce(import('@/pages/landing/index'))
  },
  {
    path: '/main',
    element: ce(import('@/pages/main/index'))
  },
  {
    path: '/editor',
    element: ce(import('@/pages/editor/index'))
  },
  {
    path: 'preview',
    element: ce(import('@/pages/preview/index'))
  }
]

const router = createBrowserRouter(route)

const Router = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Router
