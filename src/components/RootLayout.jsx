import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main className="min-h-[100vh] min-w-[100vw] bg-[#F7F8F9] font-['Rubik']">
      <Outlet />
    </main>
  )
}

export default RootLayout
