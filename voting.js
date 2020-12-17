let stations = [
  ["Clairview" , 50 , "community centre"],
  ["Terwilliger" , 70, "school" ],
  ["Eastglen" , 15 , "school"],
  ["Safeway" , 100 , "store"],
  ["AMA" , 10 , "business"],
];

function chooseStations(stations) {

  const goodStations = [];

  for (const station of stations) {
    const capacity = station[1]
    if (capacity >= 20 ){
      const type = station[2]

      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations));