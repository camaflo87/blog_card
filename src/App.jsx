import { useState } from "react";
import "./app.css";

function App() {
  const [logrado, setLogrado] = useState(true);

  return (
    <>
      <main className="main">
        <section className="main__section">
          <img src="./illustration-article.svg" alt="img_blog" />
        </section>
        <section className="main__section--body">
          <a href="#" onClick={() => setLogrado(!logrado)}>
            Learning
          </a>
          <p>Published 21 Dec 2023</p>
          <h2>HTML & CSS foundations</h2>
          <p className="main__section--body--text">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="main__footer">
            <img src="./image-avatar.webp" alt="avatar" />
            <p>Greg Hooper</p>
          </div>
        </section>
        <div className={`modal ${logrado ? "modal__oculto" : ""}`}>
          <p>Reto Logrado</p>
        </div>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Carlos Alberto Martinez Florez</a>.
      </div>
    </>
  );
}

export default App;
