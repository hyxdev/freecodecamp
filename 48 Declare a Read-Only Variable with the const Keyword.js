function printManyTimes(str){
    "use strict";

    const SENTANCE = str + " is cool!";


    for (let i = 0; i < str.length; i += 2 ){
        console.log(SENTANCE);

    }
}
printManyTimes("weeeee");