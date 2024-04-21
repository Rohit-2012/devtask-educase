import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main className="min-h-[100vh] min-w-[100vw]">
      <Outlet />
    </main>
  )
}

export default RootLayout
