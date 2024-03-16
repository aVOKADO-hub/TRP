enLan = {
    dayOfweekEn(){
        number=prompt("enter day of month","For Example: 1 = Monday")
        dayOfWeek={
            1:"Monday",
            2:"Tuesday",
            3:"Wednsday",
            4:"Thursday",
            5:"Friday",
            6:"Saturday",
            7:"Sunday",
        }
            return number>0 && number<8 ? "The day is "+dayOfWeek[number] :"In week we have only 7 days"
    },
    dayOfweekUkr(){
        number=prompt("введіть день неділі","Наприкад: 1 = Понеділок")
        dayOfWeek={
            1:"Понеділок",
            2:"Вівторок",
            3:"Середа",
            4:"Четвер",
            5:"П'ятниця",
            6:"Субота",
            7:"Неділя",
        }
            return number>0 && number<8 ? "День тижня "+dayOfWeek[number] :"В тижні лише 7 днів"
    }
}
while(true){
    language = prompt("Choose the language: ","English", "Ukrainian");
    if("English" == language){
        alert(enLan.dayOfweekEn());
        break;
    }
    else if ("Ukrainian" == language){
        alert(enLan.dayOfweekUkr());
        break;
    }
}