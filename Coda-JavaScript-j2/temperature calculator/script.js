let TempByDay = { "Monday" : 0, "Tuesday" : 0, "Wednesday" : 0, "Thursday" : 0, "Friday" : 0, "Saturday" : 0, "Sunday" : 0 };
for (let key in TempByDay) {
    let temperature = Number(parseFloat(prompt("What was the temperature "+key+" ?"),10));
    TempByDay[key] = temperature;
}
let maxTemperature;
let minTemperature;
let sumOfTemperature = 0;
for (let temperature of Object.values(TempByDay)) {
    if (typeof maxTemperature === "undefined") {
        maxTemperature = temperature;
    }else if (temperature > maxTemperature) {
        maxTemperature = temperature;
    }
    if (typeof minTemperature === "undefined") {
        minTemperature = temperature;
    }else if (temperature < minTemperature) {
        minTemperature = temperature;
    }
    sumOfTemperature += temperature;
}
console.log("Températures de la semaine :");
for (let key in TempByDay) {
    console.log("-"+key+" : "+TempByDay[key]+"°C");
}
console.log("Température moyenne : "+sumOfTemperature / Object.values(TempByDay).length+"°C");
console.log("Température maximale : "+maxTemperature+"°C");
console.log("Température minimale : "+minTemperature+"°C");