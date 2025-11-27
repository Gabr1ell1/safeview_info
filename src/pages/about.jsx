import "../style/about.css";
import "../pages/home";
import projetoIcon from "../assets/projetoIcon.png";

import seta from "../assets/seta.png";
import Navbar from "../components/Navbar";
import integrantes from "../assets/integrantes.jpg";

export default function About() {
  return (
    <>
      <header className="header-about">
         <div className="seta">
          <a href="/" className="seta-voltar">
            <img src={seta} alt="Voltar" />
          </a>
        </div>


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

        <span className="titulo">Time SafeView</span>
          <div className="card">
            <img src={integrantes} alt="integrantes" className="card-image" />
              <p>
               Foram meses de estudo, planejamento e desenvolvimento, um ano inteiro dedicado a transformar uma ideia em algo palpável. Escolhemos este tema porque entendemos sua relevância e o impacto real que pode gerar, especialmente quando pensamos em segurança e cuidado no trânsito.
              
               Sabemos que ainda há pontos a aprimorar e pretendemos continuar aprimorando e expandindo este trabalho no futuro, transformando cada melhoria em mais um passo rumo a uma solução ainda mais completa e eficaz.
              </p>
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
        
      <section>
          <h2>Quer entender mais sobre como isso é importante?</h2>
           <div className="conteudo-projeto">
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/kr5nzyVM-0U?si=B9SWX7gLf8tFX8Ye" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
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
