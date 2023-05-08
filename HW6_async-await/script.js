const btnIP = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
async function getIP() {
  const resIP = await fetch("https://api.ipify.org/?format=json");
  const ip = await resIP.json();

  const ipString = ip.ip.toString();
  console.log(ipString);
  const resMyIP = await fetch(
    `http://ip-api.com/json/${ipString}?fields=1066525`
  );

  const myIp = await resMyIP.json();
  console.log(myIp);

  const ipHTML = document.createElement("div");
  ipHTML.classList.add("ip__content");
  ipHTML.innerHTML = `    <h1>Я знайшов вас!)</h1>
    <h2>Ви знаходитесь на континенті: ${myIp.continent}</h2>
    <h3>В країні: ${myIp.country}</h3>
    <h4>В ${myIp.regionName} області</h4>
    <p>Ваше місто: ${myIp.city}</p>
    <li>Код вашого району: ${myIp.region}</li>
    <li>Як вам провайдер ${myIp.org} ?</li>
    `;
  ipHTML.remove();
  wrapper.append(ipHTML);
}

// getIP();
btnIP.addEventListener("click", getIP);
