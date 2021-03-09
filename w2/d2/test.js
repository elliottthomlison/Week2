let numTimesRun = 0;

const interval = setInterval(function() {
  numTimesRun++;
  if (numTimesRun === 10) {
    return clearInterval(interval)
    // console.log('fuckme')
    return
  }
  console.log('hello', numTimesRun);
}, 250);

setTimeout(() => {
  clearInterval(interval);
}, 5001);

// console.log(interval)