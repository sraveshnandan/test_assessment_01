import Header from "./components/Header/Header";
import BrowserMmain from "./components/BrowserMdedia/BrowserMmain";
import Client from "./components/Client";
import About from "./components/About/About";
import MediaPlan from "./components/Header/MediaPlan"
import Blog from "./components/Blog";
import News from "./components/News";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/NavBar";
function App() {
  return (
    <>
      <Navbar/>
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
