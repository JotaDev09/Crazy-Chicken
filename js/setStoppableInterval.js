let IntervalIDS = [];

/**
 * create intervals in array
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    IntervalIDS.push(id);
}

/**
 * stop all stoppable Intervals
 */
function stopInterval() {
    IntervalIDS.forEach(clearInterval);
}