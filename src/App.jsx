import Header from "./components/Header/Header";
import NavbarMain from "./components/Navbar/NavbarMain";
import BrowserMmain from "./components/BrowserMdedia/BrowserMmain";
import Client from "./components/Client";
import About from "./components/About/About";
import MediaPlan from "./components/Header/MediaPlan"
import Blog from "./components/Blog";
import News from "./components/News";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <NavbarMain />
      <Header />
      <BrowserMmain />
      <Client />
      <About />
      <MediaPlan/>
      <Blog />
      <News/>
      <Footer />
    </>
  );
}

export default App;
