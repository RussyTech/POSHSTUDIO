import { Outlet } from "react-router-dom";
import Header from "./app/layout/Header";
// import CustomCursor from "./app/lib/CustomCursor";

//import Footer from "./app/layout/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* <CustomCursor /> */}
      <Header />
      <main className="flex-grow pt-[108px]">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}