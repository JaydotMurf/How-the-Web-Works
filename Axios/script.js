async function getData() {
  const response = await axios.get('https://swapi.dev/api/planets/');
  const { next: secondPage, results: firstSetOfResults } = response.data;

  firstSetOfResults
    .map((planet) => planet.name)
    .forEach((planet) => console.log(planet));

  const secondResponse = await axios.get(secondPage);
  const { next, thirdPage, results: secondSetOfResults } = secondResponse.data;

  secondSetOfResults
    .map((planet) => planet.name)
    .forEach((planet) => console.log(planet));
}

getData();
