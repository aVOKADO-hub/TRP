function Table(){
    this.paint = function(height, width){
        const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
        count = 1 
        for (let i = height; i >0; i--) {
            str=""+i
            count = i
            for (let j = 0; j < width; j++) {
                if(count%2==0){
                    str= str.concat(" #")
                }
                else{
                    str=str.concat(" @");
                }
                count++
            }
            console.log(str);
        }
        str=" "
        for (let i = 0; i <height; i++) {
            str= str.concat(" "+ letters.slice(i,i+1))
        }
        console.log(str)
    }
}
table = new Table();
table.paint(8,8)