import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setNutri(json);
      });
  }, []);

  return (
    <div>
      <header>
        <strong>NUTRIÇÃo</strong>
      </header>

      <div className="articles-container">
        {nutri.map((item) => {
          return (
            <article key={item.id}>
              <strong>{item.titulo}</strong>
              <img className="img" src={item.capa} alt={item.titulo} />
              <p>{item.subtitulo}</p>
              <span>{item.categoria}</span>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default App;
