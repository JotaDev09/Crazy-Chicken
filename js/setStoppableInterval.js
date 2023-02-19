let intervalIDS = [];

/**
 * create intervals in array
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIDS.push(id);
}

/**
 * stop all stoppable Intervals
 */
function stopInterval() {
    intervalIDS.forEach(clearInterval);
}