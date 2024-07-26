import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Menu from "./Components/Menu/Menu";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FAQ from "./Components/FAQ/FAQ";
import Facebook from "./Components/Facebook/Facebook";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Blog from "./Components/Blog/Blog";
import PageSingle from "./Components/Blog/PageSingle";
import Gallery from "./Components/Gallery/Gallery";
import Youtube from "./Components/Youtube/Youtube";
import Tiktok from "./Components/Tiktok/Tiktok";
import Instagram from "./Components/Instagram/Instagram";
import NotFound from "./Components/NotFound/NotFound";
import Payment from "./Components/Payment/Payment";
import Landing from "./Components/Landing/Landing";
import BackToTop from "./Components/BackToTop/BackToTop";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import VirtualAssistant from "./Components/VirtualAssistant/VirtualAssistant";
import MyCake from "./Components/MyCake/MyCake";
import Comparison from "./Components/Comparison/Comparison";
import Branch from "./Components/Branch/Branch";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"; 
import RewardManager from "./Components/RewardManager/RewardManager";
import "./App.css";

function App() {
  const location = useLocation();
  const isFacebookOrYoutubeOrNotFound =
    location.pathname === "/Facebook" ||
    location.pathname === "/Youtube" ||
    location.pathname === "/Tiktok" ||
    location.pathname === "/Instagram" ||
    location.pathname === "/NotFound";
  const isLandingPage = location.pathname === "/";
  const shouldRenderNavbarFooter =
    !isFacebookOrYoutubeOrNotFound && !isLandingPage;

  const [loading, setLoading] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    const handleRouteChange = () => setLoading(true);
    handleRouteChange();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  const handleUserUpdate = (user, avatar) => {
    setUserAvatar(avatar || user.photoURL);
  };

  return (
    <ErrorBoundary>
      <div>
        {loading && <LoadingScreen />}
        {shouldRenderNavbarFooter && <Navbar userAvatar={userAvatar} />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pies" element={<ShopCategory category="pies" />} />
          <Route path="/cake" element={<ShopCategory category="cake" />} />
          <Route
            path="/cupcake"
            element={<ShopCategory category="cupcake" />}
          />
          <Route
            path="/cheesecake"
            element={<ShopCategory category="cheesecake" />}
          />
          <Route
            path="/brownies"
            element={<ShopCategory category="brownies" />}
          />
          <Route
            path="/desserts"
            element={<ShopCategory category="desserts" />}
          />
          <Route
            path="/drinking"
            element={<ShopCategory category="drinking" />}
          />
          <Route
            path="/merchandise"
            element={<ShopCategory category="merchandise" />}
          />
          <Route path="/about us" element={<About />} />
          <Route path="/contact us" element={<Contact />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={<LoginSignup onUserUpdate={handleUserUpdate} />}
          />
          <Route path="/OrderHistory" element={<OrderHistory />} />
          <Route path="/MyCake" element={<MyCake />} />
          <Route path="/Comparison" element={<Comparison />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/VirtualAssistant" element={<VirtualAssistant />} />
          <Route path="/Facebook" element={<Facebook />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="Pagesingle/:id" element={<PageSingle />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/PageSingle/:id" element={<PageSingle />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Youtube" element={<Youtube />} />
          <Route path="/Tiktok" element={<Tiktok />} />
          <Route path="/Instagram" element={<Instagram />} />
          <Route path="/Branch" element={<Branch />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/RewardManager" element={<RewardManager />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BackToTop />
        {shouldRenderNavbarFooter && <Footer />}
      </div>
    </ErrorBoundary>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
