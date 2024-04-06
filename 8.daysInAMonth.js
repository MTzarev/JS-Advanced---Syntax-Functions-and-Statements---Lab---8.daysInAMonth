function daysInMonth(month, year) {
let date = new Date(year, month-1, 1)
date.setMonth(date.getMonth()+1)
date.setDate(0)
    console.log(date.getDate());
}
daysInMonth(1, 2012);
