import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:any): number {
    let today:Date =new Date();
    let todayWithNoTime:any=new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference=Math.abs(value-todayWithNoTime)
    const secondsInDay=86400;//60 seconds * 60minutes in an hour *24 hours *24 hours in a day
    var dateDifferenceSeconds=dateDifference *0.00
    //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;
    if(dateCounter>=1 && value>todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
