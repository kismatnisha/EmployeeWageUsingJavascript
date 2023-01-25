const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR= 20;

let empHrs=0;
let totalEmpHrs=0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();


function getworkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        default:
            return 0;
    }
}
function calculateDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && 
        totalWorkingDays < NUM_OF_WORKING_DAYS) 
        {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            totalEmpHrs += getworkingHours(empCheck);
            totalEmpHrs += empHrs;
            empDailyWageArr.push(calculateDailyWage(empHrs));
            empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
        }

console.log(empDailyWageMap)
let empWage=calculateDailyWage(totalEmpHrs);


console.log("UC-8 Total Days : " +totalWorkingDays+ "\tTotal Hours: "+totalEmpHrs+ "\tEmployee Wage: "+empWage);




