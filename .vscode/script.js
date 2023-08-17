function calculateTotalTicketPrice(ages){
    let cost = 0;
    for(let i=0 ; i<ages.length ; i++){
        if(ages[i]<12){
            cost=5
        }
        else if(ages[i]<12 && ages[i]>17 ){
            cost = 10
        }
        else if(ages[i]<18 && ages[i] >59){
            cost= 15
        }
        else if(ages[i]<60){
            cost = 8
        }

        let TotalTicketPrice = 0
        TotalTicketPrice += cost
    }
console.log(TotalTicketPrice);
}
calculateTotalTicketPrice([8, 15, 30, 65])