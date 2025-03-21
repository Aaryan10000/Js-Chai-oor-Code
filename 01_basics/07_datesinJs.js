// Dates

let myDate = new Date()
// console.log(myDate.toString()); - Gives everything including GMT also

// console.log(myDate.toDateString()); - Gives full date + day

// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString()); - Gives date in proper format 

// console.log(myDate.toLocaleString()); - Gives proper format date + time 

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 23)
// let myCreatedDate = new Date(2025, 0, 23, 5, 3)
// let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date(
)
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getHours());
// console.log(newDate.getTime());


// `${newDate.getDay()} and the time is ${newDate.getTime()}`

/* console.log(newDate.toLocaleString('default', {
    weekday: "long",
    //timeZone: ''
}))*/