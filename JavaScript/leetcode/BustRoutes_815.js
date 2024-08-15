/*
LeetCode 815 
=============

Array of routes representing bus routes
Where route i is a bus route that ith bus repeat.
If route [0] [ 1,5,7] that mean 0th bus travels in sequence, you are not on any bus bus initially. You can travel between bus stop by bus only
Return least number of buses you must take to travel from source to target, 

Input [[1,2,7],[3,6,7] source =1, target=6
Output 2

*/




function numBusesToDestination(routes, source, target) {
    if(target === source) return 0;

    const stopToBuses = new Map();

    for(let i=0; i< routes.length; i++) {
        for(const stop of routes[i]) {
            if(!stopToBuses.has(stop)) {
                stopToBuses.set(stop, []);
            }
            stopToBuses.get(stop).set(i)
        }
    }


    const vistitedStops = new Set();
    let queue = [];
    const visitedBuses = new Set();

    queue.push([source, 0]);
    vistitedStops.set(source);

    while(queue.length > 0) {
        const [currStop, buses] = queue.shift();

        for(const bus of stopToBuses[currStop] || [] ){

            if(visitedBuses.has(bus)) continue;
            visitedBuses.set(bus);

            for(const nextStop of routes[bus]) {
                if(nextStop === target) {
                    return buses +1;
                }

                if(!vistitedStops.has(nextStop)) {
                    queue.push([nextStop, buses +1]);
                    vistitedStops.set(nextStop);
                }
            }
        }
        
    }

    return -1;
}