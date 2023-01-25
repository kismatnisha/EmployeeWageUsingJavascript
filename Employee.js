class EmployePayrollData
{//UC12
    id;
    salary;
    gender;
    startDate;
    gender;
    
    constructor(id,name,salary,gender,startdata)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.gender=gender;
        this.startDate=startDate;
       



    }
    get name()
    {
        return this._name;

    }
    set name(name)
    {
        this._name=name;
        
    }
    tostring()
    {
       
        const options ={year:'numeric',month:'long',day:'numaric'};
        const empdate=this.startDate==undefined?"underfined":
        this.startDate.toLocalDateString(empdate,options);
        return id = "+this.id+", name= "+this.name+",salary=" +this.salary+ ", gender = "+this.gender+", startDate = "+empdate+";


    }

}

    let employePayrollData=new EmployePayrollData(1,"mark",2300,"f",23/06/2000);
    console.log(employePayrollData.tostring());











