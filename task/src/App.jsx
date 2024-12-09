import "./App.css";
import Header from "./components/Header";
import Home from "./section/Home";
import Service from "./section/Service";
import Image from "./section/Image";
import Video from "./section/Video";
import Package from "./section/Package";

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="gallery">
        <Image />
      </section>

      <section id="video">
        <Video />
      </section>

      <section id="packages">
        <Package />
      </section>
    </>
  );
}

export default App;
