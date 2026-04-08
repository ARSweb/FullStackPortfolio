import { Outlet } from "react-router-dom";
// sidebar ni import qil

const MainLayout = () => {
  return (
    <div>
        {/* tailwind bilan dizaynlar yoziladi  */}
        <main>
            <Outlet/>
        </main>
        {/* bu yerda sidebar bo'ladi */}
        <div>
            {/* sidebar import */}
        </div>
    </div>
  )
}

export default MainLayout
