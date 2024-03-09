import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import MobileMenuContextProvider from "./store/context";

export default function App() {
  return (
    <MobileMenuContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </MobileMenuContextProvider>
  );
}
