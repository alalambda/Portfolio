import './App.css';
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
    <header className="nav">
      <nav className="nav__container__actions">
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="about">
              about
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="work">
              work
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              contact  
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="coffee">
              buy me a coffee
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <section id="about">
      <div className="content">
        <div>about</div>
        <div className="long-boring-introduction">
          <p>Nice to meet you. <br />
          My name is Anna, and I am based in Riga, Latvia. 🇱🇻 <br />
          I am a passionate photographer and software developer. <br />
          My interest in photography was ignited by my old Nokia 5800 phone.
          </p>
        </div>
        <div className="big-boring-portrait">
          <img src={require('./assets/000040.jpg')} />
        </div>
      </div>
    </section>
    <section id="work">work</section>
    <section id="contact">contact</section>
    <section id="coffee">buy me coffee</section>
  </div>
  );
}

export default App;
