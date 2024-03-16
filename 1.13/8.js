class Task{
    constructor(name,description,dateOfStart,dateOfTerminate,progress){
        this.taskName = name;
        this.taskDescription= description;
        this.startDate = dateOfStart;
        this.terminateDate = dateOfTerminate;
        this.progress = progress+"%"; //default value
    }
}
class RunningTask extends Task{
    constructor(name,description,dateOfStart,dateOfTerminate,progress,numberOfMembers){
        super(name,description,dateOfStart,dateOfTerminate,progress)
        this.numberOfMembers = numberOfMembers;
    }
    
}
running = new RunningTask("deploy","degreeding from school", new Date(2021,4,17),new Date(2021,4,21),87)
console.log(running);