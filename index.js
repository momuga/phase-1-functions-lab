// Code your solution in this file!

 function distanceFromHqInBlocks(someValue) {
    return someValue - 42;
  }

  function distanceFromHqInFeet(someValue) {
  	return (someValue -42) * 256;
}

 function distanceTravelledInFeet(start, destination) {
    return destination - start;
  }

  function calculatesFarePrice(start, destination) {
   let d = destination -start;
   if(d>=2500)
   {
   		return `cannot travel that far`;
   }
   else if(d>=2000 && d<=2500)
   {
   	 return   `${25} dollars`;
   }
   else if (d >= 400) {

   	let c = 2000 - 400;
   	let t = c / 2;

   	return `${t} dollars`;
   }

   let fare = 2;
  }