// de tijd van de timeout kan je aanpassen als je een fake loader langer of korten wil laten zien

function getNextPage() {
  return './pages/home/index.html';
};

setTimeout(() => {
  // ga naar de correcte pagina
  location.assign(getNextPage());
}, 2000);
