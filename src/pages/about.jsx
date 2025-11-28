import "../style/about.css";
import "../pages/home";
import projetoIcon from "../assets/projetoIcon.png";
import pesquisaCampo from "../assets/pesquisaCampo.png"
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

        <section>
            <h2>Por que esse Projeto?</h2>
            <div className="conteudo-projeto">
            <img src={projetoIcon} alt="projeto" className="imagem-projeto" />
            <p>
                <span className="destaque">E se um simples ponto cego fosse o motivo de um acidente que poderia ter sido evitado?</span>
<br /><br />
                Hoje <span>existem sistemas que ajudam a reduzir esse risco</span>, mas não são acessíveis por:
<br /><br />
                 <span>quanto maior a precisão, mais caro o equipamento</span>, o que acaba afastando os motoristas autônomos e pequenas empresas que não conseguem investir nessas soluções ou não possuem <span> dificuldade para aprender a lidar com ferramentas tecnológica.</span>
            </p>
          </div>
        </section>

       <section>
          <h2>O que descobrimos na nossa pesquisa de campo?</h2>
          <div className="conteudo-projeto">
            <img src={pesquisaCampo} alt="pesquisa de campo" className="imagem-projeto" />
            <p>
              <span className="destaque">
                Ao conversar com motoristas e ver a rotina real, percebemos ainda mais essa dificuldade.
              </span>
              <br /><br />
              
              Esses relatos mostraram que o <span>problema é constante</span> e afeta tanto motoristas experientes quanto iniciantes, reforçando ainda mais a necessidade de uma solução prática e acessível.
              <br /><br />
              
              Se você já passou por algo parecido, compartilhe sua experiência no nosso formulário: <a href="https://forms.gle/YwjH9mKwwMJqMdhNA">
              <span>🔗Formulário SafeView</span>
              </a> 
            </p>
          </div>
        </section>

        <span className="titulo">Time SafeView</span>
          <div className="card">
            <img src={integrantes} alt="integrantes" className="card-image" />
              <p>
               Foram meses de estudo, planejamento e desenvolvimento, um ano inteiro dedicado a transformar uma ideia em algo palpável. Escolhemos este tema porque entendemos sua relevância e o impacto real que pode gerar, especialmente quando pensamos em segurança e cuidado no trânsito.
<br /><br />           
               Sabemos que ainda há pontos a aprimorar e pretendemos continuar aprimorando e expandindo este trabalho no futuro, transformando cada melhoria em mais um passo rumo a uma solução ainda mais completa e eficaz.
              </p>
          </div>
      <br />
    </div>

      <footer className="footer-about">
        <span className="obs">São Paulo • 2025</span><br />
        © 2025 SafeView — Todos os direitos reservados.
      </footer>
    </>
  );
}
