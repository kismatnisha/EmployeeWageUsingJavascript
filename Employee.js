//UC4-using For Loop for Num of Working Days
{
    const Is_PartTime=1;
    const is_FullTime=2;
    const Part_Time_Hrs=4;
    const Full_Time_Hrs=8;
    const Wage_Per_Hr=20;
    const Num_Of_WorkingDays=2;
    
        function getWorkingHrs(empCheck)
        {
        switch(empCheck)
        {
            case Is_PartTime:
                return Part_Time_Hrs;
            case is_FullTime:
                return Full_Time_Hrs;
            default:
                return 0;
        }
    }
        let totalemphr=0;
        for(let day=0;day<Num_Of_WorkingDays;day++)
        {
        let empCheck=Math.floor(Math.random()*10)%2;
        empHrs=getWorkingHrs(empCheck);
        totalemphr=empHrs*Wage_Per_Hr;
        }
        empWage=totalemphr*Wage_Per_Hr;
        console.log("Hours="+totalemphr+"  EmpWage="+empWage);
    }