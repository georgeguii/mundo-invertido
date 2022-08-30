import { getHellfireClubSubscriptions, subscribeToHellfireClub } from "./firebase/hellfireclube.js";

const txtName = document.getElementById("txtName");
const txtEmail = document.getElementById("txtEmail");
const txtLevel = document.getElementById("txtLevel");
const txtCharacter = document.getElementById("txtCharacter");

const btnSubscribe = document.getElementById("btnSubscribe");

btnSubscribe.addEventListener('click', async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value
  }

  //Funcao de cadastro
  const subscriptionId = await subscribeToHellfireClub(subscription);

  //Limpando campos
  txtName.value = ''
  txtEmail.value = ''
  txtLevel.value = ''
  txtCharacter.value = ''

  alert(`Inscrito com sucesso: ${subscriptionId}`);
});

async function loadData() {
  const subscriptions = await getHellfireClubSubscriptions();
  console.log(subscriptions);
}
loadData();