import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import {Quote} from '../quote-class/quote';
import {QuoteRequestService} from '../quote-http/quote-request.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[];
  alertService:AlertService;
  quote:Quote;
  
  
  addNewGoal(goal){
    let goalLength = this.goals.length ;
    goal.id = goalLength+1;
    goal.completeDate= new Date(goal.completeDate) 
    this.goals.push(goal)
  }
  toggleDetails(index:number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete:boolean,index:number){
    if(isComplete){
      this.goals.splice(index ,1);
    }
    
  }
  
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }
  constructor(goalService:GoalService,alertService:AlertService,private quoteService:QuoteRequestService) { 
    this.goals = goalService.getGoal()
    this.alertService = alertService;
  }

  ngOnInit(): void  {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote

}
}
