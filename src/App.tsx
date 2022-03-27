import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import News from "./components/Noticia";
import PhotoUser from "./../src/assets/neymar.jpeg";
import Galeria from "./../src/assets/galeria.svg";
import Gif from "./../src/assets/gif.png";
import Emote from "./../src/assets/emote.svg";
import Local from "./../src/assets/localização.svg";
import Lupa from "./../src/assets/search.svg";
import Camera from "./../src/assets/camera.svg";

function App() {
  const [qntdd, setQntdd] = useState(0);
      
  return (
    <>
      <div className="App">
        <Header></Header>
        <div id="principal">
          <form id="formPiu" action="#">
            <header id="homeInput">
              <div id="home">
                <h1>
                  <b>Home</b>
                </h1>
                <img src={PhotoUser} className="userBig" alt="PhotoUser" />
              </div>

              <div id="inputPiu">
                <textarea
                  onChange={(e) => setQntdd(e.target.value.length)}
                  name="piu"
                  id="txtPiu"
                  placeholder="O que você está pensando?"
                ></textarea>
                <ul>
                  <li>
                    <span className="caracteres">
                      {qntdd}
                      <span className="caracteres" id="atual"></span>/140
                    </span>
                  </li>
                  <li>
                    <img src={Galeria} className="inputImg" alt="galeria" />
                  </li>
                  <li>
                    <img src={Gif} className="inputImg" alt="GIF" />
                  </li>
                  <li>
                    <img src={Emote} className="inputImg" alt="Emote" />
                  </li>
                  <li>
                    <img src={Local} className="inputImg" alt="galeria" />
                  </li>
                </ul>
              </div>

              <div id="botãoPiar2">
                <button
                  onClick={(e) => {
                    if (qntdd == 0) {
                      alert("Preencha o campo");
                      e.preventDefault();
                    } else if (qntdd >= 140) {
                      alert("Quantidade de caracteres não permitida");
                      e.preventDefault();
                    }
                  }}
                  id="btn2"
                  type="submit"
                  name="piar"
                >
                  <b>Piar</b>
                </button>
              </div>
            </header>
          </form>

          <main>
            <Feed/>
          </main>
        </div>

        <div id="pesquisa">
          <form id="search" action="#">
            <div id="barraPesquisa">
              <img id="lupa" src={Lupa} alt="lupa" />
              <input
                type="text"
                id="searchInput"
                name="search"
                placeholder="Pesquisar users"
              />
            </div>
          </form>
          <h1>
            <b>O que está acontecendo?</b>
          </h1>

          <div id="acontecimentos">
            <News
              title="Reality - BBB"
              text="Vyni foi eliminado da casa mais vigiada do Brasil no último paredão"
              photo={Camera}
            />
            <News
              title="Reality - BBB"
              text="Vyni foi eliminado da casa mais vigiada do Brasil no último paredão"
              photo={Camera}
            />
            <News
              title="Reality - BBB"
              text="Vyni foi eliminado da casa mais vigiada do Brasil no último paredão"
              photo={Camera}
            />
            <News
              title="Reality - BBB"
              text="Vyni foi eliminado da casa mais vigiada do Brasil no último paredão"
              photo={Camera}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;