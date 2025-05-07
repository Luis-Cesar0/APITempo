// script.js
const apiKey = "3290a59782923ae83c552d18b04d410a"; // Substitua pela sua chave da OpenWeatherMap

function buscarTempo() {
  const cidade = document.getElementById("cidade").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
      if (dados.cod === 200) {
        const resultado = `
          <p><strong>${dados.name}</strong></p>
          <p>${dados.weather[0].description}</p>
          <p>🌡️ ${dados.main.temp}°C</p>
          <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png" />
        `;
        document.getElementById("resultado").innerHTML = resultado;
      } else {
        document.getElementById("resultado").innerHTML = "Cidade não encontrada.";
      }
    })
    .catch(err => {
      document.getElementById("resultado").innerHTML = "Erro ao buscar dados.";
      console.error(err);
    });
}
