import { Header } from "./components/header";
import { Hero } from "./components/sections/hero";
import { Usps } from "./components/sections/usps";
import { VideoCarousal } from "./components/sections/video-carousal";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        <VideoCarousal />
        <div className="h-[300vh]"></div>
      </main>
    </>
  );
}

export default App;
