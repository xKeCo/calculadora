import React, { Component } from "react";
import confetti from "canvas-confetti";

class Calculadora extends Component {
  state = {
    num1: "",
    num2: "",
    resultadoSuma: "",
    errorSuma: null,
    base: "",
    exponente: "",
    resultadoPotencia: "",
    errorPotencia: null,
    numRaiz: "",
    resultadoRaiz: "",
    errorRaiz: null,
    numRandom1: "",
    numRandom2: "",
    resultadonumRandom: "",
    errornumRandom: null,
    numSumatoria1: "",
    numSumatoria2: "",
    resultadonumSumatoria: "",
    errornumSumatoria: null,
    numFibonacci1: "",
    numFibonacci2: "",
    limiteFibonacci: 10 - 1,
    resultadoFibonacci: "",
    errorFibonacci: null,
    numSerie: "",
    resultadoSerie: "",
    errorSerie: null,
  };

  myConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  suma() {
    if (this.state.num1 && this.state.num2) {
      this.setState({
        resultadoSuma: parseFloat(this.state.num1) + parseFloat(this.state.num2),
        errorSuma: null,
      });
      this.myConfetti();
    } else {
      this.setState({ errorSuma: "Ingrese los 2 numeros para la suma" });
    }
  }

  potencia() {
    if (this.state.base && this.state.exponente) {
      this.setState({
        resultadoPotencia: Math.pow(parseFloat(this.state.base), parseFloat(this.state.exponente)),
        errorPotencia: null,
      });
      this.myConfetti();
    } else {
      this.setState({ errorPotencia: "Ingrese los 2 numeros para la potenciacion" });
    }
  }

  raiz() {
    if (this.state.numRaiz) {
      this.setState({
        resultadoRaiz: Math.round(Math.sqrt(parseFloat(this.state.numRaiz)) * 100) / 100,
        errorRaiz: null,
      });
      this.myConfetti();
    } else {
      this.setState({ errorRaiz: "Ingrese el numero de la raiz" });
    }
  }

  numRandom() {
    if (this.state.numRandom1 && this.state.numRandom2) {
      if (parseFloat(this.state.numRandom1) < parseFloat(this.state.numRandom2)) {
        this.setState({
          resultadonumRandom:
            Math.round(
              (Math.random() *
                (parseFloat(this.state.numRandom2) - parseFloat(this.state.numRandom1)) +
                parseFloat(this.state.numRandom1)) *
                100
            ) / 100,
          errornumRandom: null,
        });
        this.myConfetti();
      } else {
        this.setState({
          errornumRandom: "El numero 1 tiene que ser menor que el numero 2",
        });
      }
    } else {
      this.setState({ errornumRandom: "Ingrese los 2 numeros para el rango del numero aleatorio" });
    }
  }

  sumatoria() {
    if (this.state.numSumatoria1 && this.state.numSumatoria2) {
      if (parseFloat(this.state.numSumatoria1) <= parseFloat(this.state.numSumatoria2)) {
        let acumulador = 0;

        for (
          let index = parseFloat(this.state.numSumatoria1);
          index <= parseFloat(this.state.numSumatoria2);
          index++
        ) {
          acumulador = acumulador + index;
        }

        this.setState({
          resultadonumSumatoria: acumulador,
          errornumSumatoria: null,
        });
        this.myConfetti();
      } else {
        this.setState({
          errornumSumatoria: "El numero 1 tiene que ser menor que el numero 2",
        });
      }
    } else {
      this.setState({
        errornumSumatoria: "Ingrese los 2 numeros para la sumatoria",
      });
    }
  }

  fibonacci() {
    if (this.state.numFibonacci1 && this.state.numFibonacci2) {
      if (parseInt(this.state.numFibonacci1) <= parseInt(this.state.numFibonacci2)) {
        let limit = this.state.limiteFibonacci || 10 - 1;

        let fibo = [parseInt(this.state.numFibonacci1), parseInt(this.state.numFibonacci2)];

        for (let i = 2; i <= limit; i++) {
          fibo.push(fibo[i - 1] + fibo[i - 2]);
        }

        this.setState({
          resultadoFibonacci: fibo,
          errorFibonacci: null,
        });
        this.myConfetti();
      } else {
        this.setState({
          errorFibonacci: "El numero 1 tiene que ser menor que el numero 2",
        });
      }
    } else {
      this.setState({
        errorFibonacci: "Ingrese los 2 numeros para la serie de fibonacci",
      });
    }
  }

  serie() {
    if (this.state.numSerie) {
      let serie = [];

      for (let i = 0; i <= this.state.numSerie; i++) {
        if (i % 5 === 0 && i > 0) {
          serie.push("N");
        } else {
          if (i > 0) {
            serie.push(i);
          }
        }
      }

      this.setState({
        resultadoSerie: serie,
        errorSerie: null,
      });
      this.myConfetti();
    } else {
      this.setState({
        errorSerie: "Ingrese el numero limite de la serie",
      });
    }
  }

  render() {
    return (
      <main>
        <h1 className="main-title">Calculadora</h1>
        {/* Suma */}
        <section>
          <h1>Suma para dos números reales</h1>
          <div>
            <input
              onChange={(e) => this.setState({ num1: e.target.value })}
              type="number"
              placeholder="Numero 1"
            />
            <input
              onChange={(e) => this.setState({ num2: e.target.value })}
              type="number"
              placeholder="Numero 2"
            />
            <button
              onClick={() => {
                this.suma();
              }}
            >
              Sumar
            </button>

            {this.state.resultadoSuma && <h2>Resultado: {this.state.resultadoSuma}</h2>}
            {this.state.errorSuma && <h4>{this.state.errorSuma}</h4>}
          </div>
        </section>

        {/* Potencia */}

        <section>
          <h1>Potencia para base y exponente real</h1>

          <div>
            <input
              onChange={(e) => this.setState({ base: e.target.value })}
              type="number"
              placeholder="Base"
            />
            <input
              onChange={(e) => this.setState({ exponente: e.target.value })}
              type="number"
              placeholder="Exponente"
            />
            <button
              onClick={() => {
                this.potencia();
              }}
            >
              Potencia
            </button>

            {this.state.resultadoPotencia && <h2>Resultado: {this.state.resultadoPotencia}</h2>}
            {this.state.errorPotencia && <h4>{this.state.errorPotencia}</h4>}
          </div>
        </section>

        {/* Raiz */}

        <section>
          <h1>Raiz cuadrada para número real</h1>
          <div>
            <input
              onChange={(e) => this.setState({ numRaiz: e.target.value })}
              type="number"
              placeholder="Numero Raiz"
            />
            <button
              onClick={() => {
                this.raiz();
              }}
            >
              Raiz Cuadrada
            </button>

            {this.state.resultadoRaiz && <h2>Resultado: {this.state.resultadoRaiz}</h2>}
            {this.state.errorRaiz && <h4>{this.state.errorRaiz}</h4>}
          </div>
        </section>

        {/* Numero Real */}

        <section>
          <h1>Generar un número aleatorio real entre dos números reales</h1>
          <div>
            <input
              onChange={(e) => this.setState({ numRandom1: e.target.value })}
              type="number"
              placeholder="Numero Min."
            />
            <input
              onChange={(e) => this.setState({ numRandom2: e.target.value })}
              type="number"
              placeholder="Numero Max."
            />
            <button
              onClick={() => {
                this.numRandom();
              }}
            >
              Generar numero ramdon
            </button>

            {this.state.resultadonumRandom && <h2>Resultado: {this.state.resultadonumRandom}</h2>}
            {this.state.errornumRandom && <h4>{this.state.errornumRandom}</h4>}
          </div>
        </section>

        {/* Sumatoria */}

        <section>
          <h1>Generar sumatoria real entre i = número real y n = número real</h1>
          <div>
            <input
              onChange={(e) => this.setState({ numSumatoria1: e.target.value })}
              type="number"
              placeholder="Numero 1"
            />
            <input
              onChange={(e) => this.setState({ numSumatoria2: e.target.value })}
              type="number"
              placeholder="Numero 2"
            />
            <button
              onClick={() => {
                this.sumatoria();
              }}
            >
              Generar sumatoria
            </button>

            {this.state.resultadonumSumatoria && (
              <h2>Resultado: {this.state.resultadonumSumatoria}</h2>
            )}
            {this.state.errornumSumatoria && <h4>{this.state.errornumSumatoria}</h4>}
          </div>
        </section>

        {/* Fibonacci */}

        <section>
          <h1>Generar la serie de Fibonacci entre un primer número y un segundo número</h1>
          <div>
            <input
              onChange={(e) => this.setState({ numFibonacci1: e.target.value })}
              type="number"
              placeholder="Numero 1"
            />
            <input
              onChange={(e) => this.setState({ numFibonacci2: e.target.value })}
              type="number"
              placeholder="Numero 2"
            />
            <input
              onChange={(e) => this.setState({ limiteFibonacci: e.target.value - 1 })}
              type="number"
              placeholder="Limite"
              defaultValue={10}
            />
            <button
              onClick={() => {
                this.fibonacci();
              }}
            >
              Generar serie de Fibonacci
            </button>

            {this.state.resultadoFibonacci && (
              <h2>
                Resultado:{" "}
                {this.state.resultadoFibonacci.map((numero, i) => {
                  return i === 0 ? numero : `, ${numero}`;
                })}
              </h2>
            )}
            {this.state.errorFibonacci && <h4>{this.state.errorFibonacci}</h4>}
          </div>
        </section>

        {/* Serie */}

        <section>
          <h1>
            Generar la serie 1, 2, 3, 4, N, 6, 7, 8, 9, N, 11, 12, 13, 14, N, ... hasta un número X
            previamente ingresado
          </h1>
          <div>
            <input
              onChange={(e) => this.setState({ numSerie: e.target.value })}
              type="number"
              placeholder="Numero limite"
            />
            <button
              onClick={() => {
                this.serie();
              }}
            >
              Generar serie
            </button>

            {this.state.resultadoSerie && (
              <h2>
                Resultado:{" "}
                {this.state.resultadoSerie.map((item, i) => {
                  return i === 0 ? item : <>, {item === "N" ? <span>{item}</span> : item}</>;
                })}
              </h2>
            )}
            {this.state.errorSerie && <h4>{this.state.errorSerie}</h4>}
          </div>
        </section>
      </main>
    );
  }
}

export default Calculadora;
