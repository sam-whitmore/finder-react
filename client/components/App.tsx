import { Outlet } from "react-router-dom";

import NavigationBar from "./NavigationBar";

export default function App() {
  return (
      <div className="w-screen h-screen">
          <NavigationBar />
        <section className="font-sans w-screen h-[90%]">
          <Outlet />
        </section>
      </div>
  )
}
