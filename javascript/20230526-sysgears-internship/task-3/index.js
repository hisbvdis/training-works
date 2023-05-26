const func = () => {
  const randomInt = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  

  const asteroid = {
    x: randomInt(0, 100),
    y: randomInt(0, 100),
    z: randomInt(0, 100),
  };


  const attempts = { count: 0, coordinates: [] };
  

  const getDistanceToAsteroid = ({x=0, y=0, z=0}) => {
    attempts.count++;
    attempts.coordinates.push({x, y, z});

    return Math.sqrt(
      Math.pow(x - asteroid.x, 2) +
      Math.pow(y - asteroid.y, 2) +
      Math.pow(z - asteroid.z, 2)
    );
  };
  

  const findCoord = (min, max, axis) => {
    const center = Math.floor(min + (max - min) / 2);
    const firstCoord = Math.floor(min + (max - min) / 4 * 1);
    const secondCoord = Math.floor(min + (max - min) / 4 * 3);
  
    const firstDistance = getDistanceToAsteroid({[axis]: firstCoord});
    const secondDistance = getDistanceToAsteroid({[axis]: secondCoord});
  
    if (firstDistance < secondDistance) {
      return findCoord(min, center, axis);
    }
    else if (firstDistance > secondDistance) {
      return findCoord(center, max, axis);
    }
    else if (firstDistance === secondDistance) {
      return (firstCoord + secondCoord) / 2;
    }
  }
  

  const x = findCoord(0, 100, "x");
  const y = findCoord(0, 100, "y");
  const z = findCoord(0, 100, "z");
  
  
  const result = JSON.stringify({
    result: {
      location: {x, y, z},
      probes: attempts
    }
  })

  console.log( result );
  return result;
}

func();
