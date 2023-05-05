import { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li className={activeSection === 0 ? "active" : ""}>
            <a href="#section1" >Section 1</a>
          </li>
          <li className={activeSection === 1 ? "active" : ""}>
            <a href="#section2" >Section 2</a>
          </li>
          <li className={activeSection === 2 ? "active" : ""}>
            <a href="#section3" >Section 3</a>
          </li>
        </ul>
      </nav>

      <section id="section1">
        <h2>Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>

      <section id="section2">
        <h2>Section 2</h2>
        <p>Nulla nec tortor sed augue luctus ultricies.</p>
      </section>

      <section id="section3">
        <h2>Section 3</h2>
        <p>Vivamus luctus metus at sapien faucibus, vitae lacinia turpis maximus.</p>
      </section>

      <style>
        {`
          nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #eee;
            padding: 10px;
          }

          nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            margin: 0;
            padding: 0;
          }

          nav li {
            margin: 0 10px;
          }

          nav li.active a {
            font-weight: bold;
          }

          section {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 2rem;
          }

          section:nth-of-type(even) {
            background-color: #eee;
          }
        `}
      </style>
    </>
  );
}

export default App;



