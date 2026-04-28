import HomeOne from '#/components/pages/homes/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <HomeOne />
    </>
  )
}
