let nombreCBU = "";
let numeroCBU = 0;
let aliasCBU = "";
let user = "";
let form_button = document.getElementById("formButton");
let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let registrar = document.getElementById("registrar");
let modal_button = document.getElementById("modal-button");
let nombreCompleto = document.getElementById("nombreCompleto");
let info = document.getElementById("info");
let retirar = document.getElementById("retirar");
let exitos = document.getElementById("exitos");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];
let felicitar = document.getElementById("felicitar");
let cuentaBanco = document.getElementById("cuentaBanco");
let noIngreso = document.getElementById("noIngreso");
let mercadoPago = document.getElementById("mercadoPago");
let pdf = document.getElementById("pdf");
let solicitoUsuario = document.getElementById("solicitoUsuario");
let cbuEquivocado = document.getElementById("cbuEquivocado");
let ordenLlegada = document.getElementById("ordenLlegada");

function copiarAlPortapapeles(id) {
  const txt = document.getElementById(id);
  txt.select();
  txt.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

form_button.addEventListener("click", function (e) {
  e.preventDefault();
  nombreCBU = document.getElementById("name").value;
  numeroCBU = document.getElementById("number").value;
  aliasCBU = document.getElementById("alias").value;
  cbuxl.innerHTML = `
❗❗🙏🏻*POR FAVOR, NUNCA ENVIAR DINERO SIN CONSULTAR CBU MINUTOS ANTES*🙏🏻❗❗
(PUEDE PERDER SU DINERO, QUEDA AVISADO)
 
🚫 No aceptamos transferencias del banco Galicia 🚫

*DATOS DE LA CUENTA*
    
Nombre Completo: *${nombreCBU}*
CBU: *${numeroCBU}*
Alias: *${aliasCBU}*

*♦️MÍNIMO DE CARGA $1000♦️*
  
Enviar *COMPROBANTE* y debajo del mismo *SU USUARIO* de la plataforma de juegos, de lo contrario no se le podrá cargar las fichas❗❗
 
INGRESA AQUI PARA JUGAR: jugalo.net`;

  cbu.innerHTML = `${numeroCBU}`;

  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("alias").value = "";
});

modal_button.addEventListener("click", function (e) {
  e.preventDefault();
  user = document.getElementById("usuario").value;
  console.log(user);
  registrar.innerHTML = `*LEER TODO* ⚠️ IMPORTANTE
(SIEMPRE PREGUNTAR CBU)

Para *comenzar a jugar* entra aquí: jugalo.net 

📝 TU USUARIO ES: ${user}
CONTRASEÑA: BET123
(ESCRIBIR IGUAL)

---------------------------------------------------------

♦️MÍNIMO DE CARGA $1000♦️
♦️MINIMO DE RETIRO $2.500♦️

*(❗NUNCA ENVIAR DINERO SIN PREGUNTAR CBU❗)*

Encontranos en instagram como @suerte.caba 📲 

🚫 *No aceptamos transferencias del banco Galicia* 🚫

⬇️ Cualquier duda o consulta ⬇️

---------------------------------------------------------

Para comenzar a jugar entra aquí: jugalo.net 

❗ CONSULTAR CBU PARA CARGAR TUS FICHAS ❗

---------------------------------------------------------`;

  const txt = document.getElementById("registrar");
  txt.select();
  txt.setSelectionRange(0, 99999);
  document.execCommand("copy");

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});

info.innerHTML = `Somos @suerte.caba ☘️💯
Un casino ONLINE, en nuestra plataforma te vas a encontrar con los mismos juegos que en un casino físico sólo que podrás jugarlos desde la comodidad en donde estés! 

¿Cómo hacer para jugar? Espera a que te generemos el usuario y te pasemos nuestro CBU, luego cargas el dinero que quieras jugar y listo! ⚡ te acreditamos las fichas al instante 😁

♦️MÍNIMO DE CARGA $1000♦️
♦️MINIMO DE RETIRO $2.500♦️

Si querés que te generemos un usuario responde este mensaje`;

retirar.innerHTML = `
💸 Para retirar su dinero responda este mensaje indicandonos:

1: Nombre de usuario
2: Monto que deseas retirar
3: CBU BANCARIO (que no sea Mercado Pago, Uala, ni LEMON)
4: ALIAS
5: Nombre y apellido que figura en tu cuenta de banco

*MINIMO DE RETIRO: $2.500*🔸
Aguarde unos instantes y en breve será enviado al sector de pagos 🏆
*Su chat será archivado, por ende, no será leído de manera frecuente.*
`;

exitos.innerHTML = `
Excelente! Felicitaciones 👏🏻👏🏻❗ Corroboramos tus fichas, te las retiramos y te enviamos al sector de pagos para que recibas tu premio💰💵

Su premio esta en fila para ser abonado, porfavor aguarde 🙏🏻 
*NO responda este mensaje porque sino pasará a estar último/a en la fila de premios, AGUARDE SU TURNO.*
`;

felicitar.innerHTML = `*Felicitaciones* por tu premio 🥳🥳🤩 Disfrutalo mucho, *gracias por elegirnos* 🥰 Si publicas el premio en Instagram y nos etiquetas obtenes un 10% de bonificación en tu próxima carga! Muchas gracias ❤️
`;

cuentaBanco.innerHTML = `Buenas!! Aquí sector pagos 🫶🏻🍀 necesito que me envíes un CBU de banco físico por favor! Así como Santander, Galicia, Bbva Francés, Hipotecario o también puede ser Rebanking, porque al transferir tantas veces a cuentas digitales como Mercado Pago, Lemon, Ualá, se nos bloquea nuestra cuenta bancaria! Si es un CBU de banco físico nos deja enviar el dinero al instante!
Si no tenes, debes esperar un rato a que la cuenta nos deje transferir a cuenta digital nuevamente 👍🏻`;

noIngreso.innerHTML = `
Su transferencia aún no impactó, *tenga en cuenta que a veces las transferencias cuentan con demoras*. Cuando ingrese su dinero le cargaremos las fichas! 🎰🎲 *Aguarde*🙏🏻
`;

mercadoPago.innerHTML = `Mercado Pago presenta demoras, te aviso por si querés enviar dinero desde la app! Hasta que no nos llegue el dinero a nuestra cuenta no podemos cargarte las fichas 🤕`;

pdf.innerHTML = `
Te solicito el comprobante en pdf (compartido desde la misma app), o nombre y apellido del titular de la cuenta, así corroboro que haya ingresado el dinero para poder cargarte las fichas 🎲‼️
`;

nombreCompleto.innerHTML = `
☘️ Hola buenas! Bienvenido/a a SUERTE CABA ☘️,
Te pido tu NOMBRE y APELLIDO para poder generarte un usuario por favor!!

⬇️❗❗En caso de ya tener un usuario , CON NOSOTROS, registrado en la plataforma por favor avisar❗❗⬇️
`;

solicitoUsuario.innerHTML = `
Recorda por favor que *debajo de CADA COMPROBANTE que envíes* necesito que escribas tu *nombre de usuario*, NADA MÁS.🙏🏻
`;

cbuEquivocado.innerHTML = `
Hola 👋🏻 Le informo que envió dinero a un cbu con el cual no estamos trabajando en este momento. Dejamos especificado previamente que siempre que vaya a realizar una transferencia, *CONSULTE EL CBU*, por más que le hayamos enviado uno hace unos minutos‼️
Ahora deberá aguardar a que ingresemos a esa cuenta y verifiquemos que haya ingresado su dinero. *PUEDE DEMORAR UNAS HORAS.*

*SEA RESPONSABLE CON SU DINERO PORQUE SI ENVÍA POR ERROR A UNA CUENTA INACTIVA QUE NO PODEMOS INGRESAR, LO PIERDE*
`;

ordenLlegada.innerHTML = `
Hola 👋🏻 Le informo que trabajamos por orden de llegada, por ende, si envía muchos mensajes su chat queda último y tardamos más en responderle. Sea paciente y será atendido.🙏🏻 Gracias.
`;

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
