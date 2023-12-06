const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
  };
  
  const getTemperatureForCity = (() => {
    const cache = {};
  
    return (city) => {
      if (cache.hasOwnProperty(city)) {
        return cache[city];
      } else {
        const temperature = temperatureData[city];
  
        if (temperature !== undefined) {
          cache[city] = temperature;
          return temperature;
        } else {
          return null;
        }
      }
    };
  })();
  
  const temperature1 = getTemperatureForCity('New York');
  console.log(temperature1);
  
  const temperature2 = getTemperatureForCity('New York');
  console.log(temperature2);
  
  const temperature3 = getTemperatureForCity('London');
  console.log(temperature3);
  
  const temperature4 = getTemperatureForCity('London');
  console.log(temperature4);
  