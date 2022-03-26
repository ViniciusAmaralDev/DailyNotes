const nameDaysWeek = [
  "Domingo, Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const nameMonths = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const getHours = (time) => {
  const date = new Date(time);

  return `${date.getHours()}:${date.getMinutes()}`;
};

export const getCustomDate = (time) => {
  const date = new Date(time);

  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${nameDaysWeek[date.getDay()]}, ${date.getDate()} de ${
    nameMonths[date.getMonth()]
  } de ${date.getFullYear()} às ${hours}:${minutes}`;
};
