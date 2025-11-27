import cores from "../assets/cores.png";
import caseSensor from "../assets/caseSensor.png";
import caseCamSensor from "../assets/caseCamSensor.png";
import circuitoSensor from "../assets/circuitoSensor.png";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <header>
        <h1>Bem-vindo ao SafeView</h1>
        <p>Segurança inteligente para motoristas — Para onde iremos hoje?</p>
      </header>

      <div className="container">
        <section>
          <h2>O que é o SafeView?</h2>
          <p>
            O SafeView é um sistema inteligente de assistência ao motorista desenvolvido para aumentar
            a segurança veicular por meio do monitoramento dos pontos cegos. Ele integra sensores,
            câmeras e um aplicativo móvel para fornecer alertas em tempo real sobre possíveis riscos ao redor do veículo.
          </p>

          <div className="highlight">
            <p>
              O sistema utiliza sensores ultrassônicos e câmeras ESP32-CAM para capturar informações
              e gerar alertas automaticamente de acordo com a proximidade de obstáculos detectados.
            </p>
          </div>
        </section>

        <section>
          <h2>✔️ Nosso objetivo</h2>
          <p>
            O objetivo principal do sistema é aumentar a segurança instalando sensores e câmeras em
            pontos estratégicos onde há risco de acidentes por falta de visibilidade — os famosos pontos cegos.
          </p>
        </section>

        <section>
          <h2>
            <img src={cores} alt="sinal" className="icone" />
            Onde se encontram os pontos cegos?
          </h2>

          <p>Os principais pontos cegos identificados em caminhões de baú:</p>

          <ul>
            <li>Ponto cego frontal — causado pela altura elevada da cabine;</li>
            <li>Ponto cego lateral direito — esse lado é mais difícil de enxergar pelos espelhos;</li>
            <li>Ponto cego traseiro — pois não aparece nos espelhos.</li>
          </ul>

          <p>
            Como será coberto: A instalação dos equipamentos foi planejada de modo que as
            <span className="til"> câmeras e sensores sejam posicionadas na parte traseira e no lado direito </span>
            do veículo, enquanto o
            <span> ponto cego frontal utiliza apenas sensores</span>.
          </p>
        </section>

          <div className="titulo">Da Concepção ao Resultado</div>
          <div className="images">
            <img src={caseSensor} alt="Case do Sensor" />
            <img src={caseCamSensor} alt="Case das Câmeras com Sensor" />
          </div>

      </div>

      <footer>
        © 2025 SafeView — Tecnologia a favor da sua segurança.
      </footer>
    </>
  )
}
