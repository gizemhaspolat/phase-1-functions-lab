function distanceFromHqInBlocks(pickUpLocation) {
  if (pickUpLocation >= 42) {
    return pickUpLocation - 42;
  } else {
    return 42 - pickUpLocation;
  }
}
function distanceFromHqInFeet(pickUpLocation) {
  if (pickUpLocation >= 42) {
    return (pickUpLocation - 42) * 264;
  } else {
    return (42 - pickUpLocation) * 264;
  }
}

function distanceTravelledInFeet(start, destination) {
  let distance = destination - start;
  if (distance >= 0) {
    return distance * 264;
  } else if (distance < 0) {
    return distance * -264;
  }
}

function calculatesFarePrice(start, destination) {
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else if (distanceInFeet > 2500) {
    return "cannot travel that far";
  }
}
