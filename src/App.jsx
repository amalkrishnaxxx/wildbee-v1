import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import Services from './sections/Services';
import SecondVideo from './sections/SecondVideo';
import Brands from './sections/Brands';
import PostCard from './sections/PostCard';
import Final from './sections/Final';
import Outro from './sections/Outro';
import AboutUs from './sections/AboutSection';
import Footer from './sections/Footer';
import ContactSection from './sections/ContactSection';
import FAQ from './sections/FAQ';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />

      <AboutUs />

      <FirstVideo />
      <Services />

      {/* <PostCard /> */}
      <Brands />

      <PostCard />
      {/* <Final /> */}
      {/* <Outro /> */}
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App