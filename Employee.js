class EmployePayrollData
{//UC11
    id;
    salary;
    
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
       



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
       
        return "id = "+this.id+", name= "+this.name+", gender = "+this.salary;


    }
}

    let employePayrollData=new EmployePayrollData(1,"mark",2300);
    console.log(employePayrollData.tostring());











