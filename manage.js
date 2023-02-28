//calculations are based on the assumption that all employees have to work the minimum of 150h monthly
//if they work less, then the payour is proportionately lower.
//hourly rate will may depending on any individual employee and montly salary can also vary depending on any individual employee 
//create a parent class along with the parent class variables
class Employees{
    _hourlyRate = 10
    // _employeeType = ''
    _salesTarget = 50000
    _minimumMonthlyHours = 150
    _formula = ''
    _payout = 0
    _message = ''
    _display = ''
	constructor(name, hoursWorked, sales){
    this.name = name
    this.hoursWorked = hoursWorked
    this.sales = sales

	}

    
}
//create child class taking an additional attribute
class Hourly extends Employees{
    constructor(name, hoursWorked, sales, hourlyRate){
        super (name, hoursWorked, sales);
        this.hourlyRate = hourlyRate

        }
        //calculate hourly paid employee
        payout(){
            this._employeeType = 'hourly paid'

            if(this.sales > this._salesTarget){
            this._payout = this.hourlyRate * 1.5 * this.hoursWorked
            this._formula = 'hourly rate * 1.5 * hours worked'

            } else if(this.sales <= this._salesTarget){
            this._payout = this.hourlyRate * this.hoursWorked
            this._formula = 'hourly rate * hours worked'
            } 
            this._message = `${this.name} is an ${this._employeeType} employee and their payout is £${this._payout.toFixed(2)}\nTheir payout was calculated accorting to the following formula: ${this._formula}`
            alert(this._message)
        }
 }




//create a child class for salaried employees
class Salaried extends Employees{
    constructor(name, hoursWorked, sales, basicFlatSalary){
        super (name, hoursWorked, sales);
        this.basicFlatSalary = basicFlatSalary
        }
        //calculate salaried employee
        payout(){
            this._employeeType = 'salaried'

            if(this.sales > this._salesTarget && this.hoursWorked >= this._minimumMonthlyHours){
                this._payout = this.basicFlatSalary * 1.1
                this._formula ='payout = basic salary * 1.1'

            }else if(this.sales > this._salesTarget && this.hoursWorked <= this._minimumMonthlyHours){
                this._payout = ((this.hoursWorked/this._minimumMonthlyHours) *1) * this.basicFlatSalary * 1.1
                this._formula = 'payout = ((hours worked/minimum monthly hours)*1) * basic salary * 1.1'

            } else if(this.sales <= this._salesTarget && this.hoursWorked <= this._minimumMonthlyHours){
                this._payout = ((this.hoursWorked/this._minimumMonthlyHours) *1) * this.basicFlatSalary
                this._formula = 'payout = ((hours worked/minimum monthly hours)*1) * basic salary'

            }else if(this.sales <= this._salesTarget && this.hoursWorked > this._minimumMonthlyHours){
                this._payout =  this.basicFlatSalary
                this._formula = 'payout = basic salary'
            }


            this._message = `${this.name} is a ${this._employeeType} employee and their payout is £${this._payout.toFixed(2)}\nTheir payout was calculated accorting to the following formula: ${this._formula}`
            alert(this._message)
    }

}
//create a child class for hybrid employees, the parent class is salaried class
class Hybrid extends Salaried{
    constructor(name, hoursWorked, sales, basicFlatSalary, hourlyRate ){
        super (name, hoursWorked, sales, basicFlatSalary);
        this.hourlyRate = hourlyRate
        }
        //calculate hybrid employee
        payout(){
            this._employeeType = 'hybrid'

            // ('Alonzo Gonzales', 185, 51000, 1400, 12)
            if(this.sales > this._salesTarget && this.hoursWorked >= this._minimumMonthlyHours){
                this._payout = this.hourlyRate * 1.2 * (this.hoursWorked - this._minimumMonthlyHours) + this.basicFlatSalary
                 this._formula = 'payout = hourly rate * 1.2 * (hours worked -37.5) + basic salary)' 

            } else if(this.sales <= this._salesTarget && this.hoursWorked >= this._minimumMonthlyHours){
                this._payout = (this.hoursWorked - this._minimumMonthlyHours) * this.hourlyRate + this.basicFlatSalary
                this._formula = '(payout = hours worked - minimum monthly hours) * hourly rate + basic salary'

            } else if(this.sales <= this._salesTarget && this.hoursWorked <= this._minimumMonthlyHours){
                this._payout = ((this.hoursWorked/this._minimumMonthlyHours) * 1) * this.basicFlatSalary
                this._formula = 'payout = ((hours worked/minimum monthly hours)*1) * basic salary'

            } else if(this.sales > this._salesTarget && this.hoursWorked <= this._minimumMonthlyHours){
                this._payout = ((this.hoursWorked/this._minimumMonthlyHours) * 1) * this.basicFlatSalary
                this._formula = 'payout = ((hours worked/minimum monthly hours)*1) * basic salary'
            }
            this._message = `${this.name} is a ${this._employeeType} employee and their payout is £${this._payout.toFixed(2)}\nTheir payout was calculated accorting to the following formula: ${this._formula}`
            alert(this._message)
    }
}
//create instances for hourly employees
hourlyEmployee = new Hourly('Jaroslaw Bukala', 160, 60000, 11)
hourlyEmployeeMark = new Hourly('Mark Cooper', 150, 40000, 10)

//create instances for salaried employees
salariedEmployee = new Salaried('Antonio Bochelli', 200, 30000, 1300)
salariedEmployeeMarcin = new Salaried('Marcin Lewandowski', 150, 41000, 1350)

//create instances for hybrid employees
hybridEmployeeAlonzo = new Hybrid('Alonzo Gonzales', 185, 51000, 1400, 12)
hybridEmployeeGemmell = new Hybrid('Robert Gemmell', 145, 50000, 1250, 10.50)


//call instances of hourly employees
hourlyEmployee.payout()
hourlyEmployeeMark.payout()

//call instances of salaried employees
salariedEmployee.payout()
salariedEmployeeMarcin.payout()

//call instances of hybrid employees
hybridEmployeeAlonzo.payout()
hybridEmployeeGemmell.payout()