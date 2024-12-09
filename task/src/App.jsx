import "./App.css";
import Header from "./components/Header";
import Home from "./section/Home";
import Service from "./section/Service";
import Image from "./section/Image";
import Video from "./section/Video";
import Package from "./section/Package";
import Subscribe from "./section/Subscribe";
import Team from "./section/Team";
import Blog from "./section/Blog";
import Contact from "./section/Contact";
import Footer from "./components/Footer";

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

      <section id="subscribe">
        <Subscribe />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="blog">
        <Contact />
      </section>

      <section id="b">
        <Footer />
      </section>
    </>
  );
}

export default App;
