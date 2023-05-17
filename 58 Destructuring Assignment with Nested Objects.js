const LOCAL_FORECAST = {
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };

  function getMaxOfTmrw(forecast){
    "use strict";
    const { tomorrow : {high : highOfTomorrow }} = forecast;

    return highOfTomorrow;
  }

  console.log(getMaxOfTmrw(LOCAL_FORECAST));
  
    

  
