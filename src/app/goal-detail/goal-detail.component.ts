import { Component, OnInit,  Input, Output, EventEmitter} from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
 
  @Input() goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();
  service: any;
  route: any;
  goalComplete(complete:boolean) {
    this.isComplete.emit(complete);
  }
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  constructor() { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }

}
