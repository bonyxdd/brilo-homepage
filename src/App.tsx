import "./App.css";
import Navbar from "./components/Navbar";
import PageLanding from "./components/PageLanding";
import SectionFirst from "./components/SectionFirst";
import SectionSecond from "./components/SectionSecond";
import SectionServices from "./components/SectionServices";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="sections">
        <PageLanding />
        <SectionFirst />
        <SectionSecond />
        <SectionServices />
      </div>
      <Footer />
    </>
  );
}

export default App;
