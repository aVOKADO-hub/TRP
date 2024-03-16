array = [1,2,4,5,6,6,7,4,556,43]
class Random {
    static nextDouble(low,hight){
        alert(Math.random()*(hight-low)+low);
    }
    static nextInt(low,hight){
        alert(Math.round(Math.random()*(hight-low)+low));
    }
    static nextElement(array){
        alert(array[Math.round(Math.random()*(array.length-1))])
    }
}
Random.nextDouble(prompt("enter min",""),prompt("enter max",""));
Random.nextInt(prompt("enter min",""),prompt("enter max",""))
Random.nextElement(array)