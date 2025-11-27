import "../style/about.css";
import "../pages/home";
import projetoIcon from "../assets/projetoIcon.png";

import seta from "../assets/seta.png";
import ester from "../assets/ester-perfil.jfif";
import gabi from "../assets/gabi-perfil.jfif";
import Navbar from "../components/Navbar";
//import gusta from "../assets/gusta-perfil.jfif";
import jhow from "../assets/jhow-perfil.jfif";

export default function About() {
  return (
    <>
      <header className="header-about">
        <a href="/" className="seta-voltar">
          <img src={seta} alt="voltar" />
        </a>

        <h1>Sobre Nós</h1>
        <p>Conheça a equipe e a história por trás do SafeView</p>
      </header>

      <div className="container">
        <div className="intro">
          <p>
            Projeto desenvolvido pelo curso Técnico de Desenvolvimento de Sistemas da
            ETEC Zona Leste.<br />
            Professor Orientador: <span className="obs">JEFFERSON ROBERTO DE LIMA</span>
          </p>
        </div>

        <span className="titulo">Integrantes</span>

        <div className="card-container">
          <div className="card">
            <img src={ester} alt="integrante" className="card-image" />
            <h2 className="card-title">ESTER RODRIGUES SOARES</h2>
          </div>

          <div className="card">
            <img src={gabi} alt="integrante" className="card-image" />
            <h2 className="card-title">GABRIELLY NASCIMENTO BENTO</h2>
          </div>
<br />
          <div className="card">
           
            <h2 className="card-title">GUSTAVO HENRIQUE</h2>
          </div>

          <div className="card">
            <img src={jhow} alt="integrante" className="card-image" />
            <h2 className="card-title">JHONATA ALVES DO NASCIMENTO</h2>
          </div>
        </div>
<br />
        <section>
          <h2>Por que esse Projeto?</h2>
           <div className="conteudo-projeto">
          <img src={projetoIcon} alt="projeto" className="imagem-projeto" />

          <p>
            Uma grande porcentagem dos acidentes envolvendo veículos de grande porte ocorre pela
            falta de visibilidade dos motoristas em relação aos elementos ao seu redor. Isso destaca
            a urgência de uma solução eficiente para esse problema.  
            Ciclistas, pedestres e veículos menores representam riscos devido às limitações visuais
            causadas pela posição elevada e lateralizada da cabine.  
            Hoje, existem sistemas que podem ser instalados em caminhões ou já vêm embutidos,
            porém o custo aumenta conforme a precisão — tornando-os inviáveis para empresas menores
            ou motoristas autônomos.
          </p>
        </div>
        </section>

      </div>

      <footer className="footer-about">
        <span className="obs">São Paulo • 2025</span><br />
        © 2025 SafeView — Todos os direitos reservados.
      </footer>
    </>
  );
}
