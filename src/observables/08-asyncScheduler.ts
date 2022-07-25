import { asyncScheduler  } from 'rxjs';

//es una subscription

const subs = asyncScheduler.schedule( function(state){

    console.log("State: ", state)
    this.schedule(state+1, 1000);

}, 3000, 0 );

asyncScheduler.schedule( () => subs.unsubscribe(), 6000)