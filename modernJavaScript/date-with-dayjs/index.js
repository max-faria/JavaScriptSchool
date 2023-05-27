const dayjs = require("dayjs");

function manipulatingDates(date) {
  // YEARS OLD TODAY
  const bDay = dayjs(date);
  const today = dayjs();
  const ageInYears = today.diff(bDay, "year");
  console.log(`Today the person has ${ageInYears} years old`);
  // NEXT BIRTHDAY
  const nextBDay = bDay.add(ageInYears + 1, "year");
  console.log(`The next birthday will be at: ${nextBDay.format("DD/MM/YYYY")}`);
  //REMANING DAYS FOR THE NEXT BIRTHDAY
  const rDays = nextBDay.diff(today, "day");
  console.log(`There are still ${rDays} days for his next birthday`);

  return "Bye bye!!!";
}

console.log(manipulatingDates("02/07/1995"));
