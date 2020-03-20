import mainData from '../data/mainData';

export default async function imageAPI(){
  const apiKey = 'Wj1_S2mQuPhA1I5Eg9Xgz1wUnlGiPmBuGgp-bp6l0Qs';

  const url = `https://api.unsplash.com/photos/random?query=${mainData.place.ru.city}+${mainData.place.ru.country}+building&client_id=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();

  document.body.style = `
  background:linear-gradient(rgba(255,255,255,0.1), rgba(0,0,0,0.5)),url(${data.urls.regular});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  font-family: Montserrat;
  `;
}