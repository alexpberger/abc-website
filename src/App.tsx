import { Contact } from "./components/Contact";
import { Credentials } from "./components/Credentials";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Situations } from "./components/Situations";
import layout from "./styles/layout.module.css";

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <div className={layout.inner}>
          <Hero />
          <Situations />
        </div>
        <Introduction />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
