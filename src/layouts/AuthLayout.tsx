import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 bg-banner-auth bg-no-repeat bg-cover"></div>

      <div className="w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl text-center">Welcome to My Teleprompter</h1>

        <Outlet />
      </div>
    </div>
  )
}
