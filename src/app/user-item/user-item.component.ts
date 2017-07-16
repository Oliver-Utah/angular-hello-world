import { Component,
  OnInit,
  Input  // added this
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  // name: string;
  @Input() name: string; // added Input annotation from parent template

  constructor() {
    // this.name = 'Felipe'; // set the name
  }

  ngOnInit() {
  }

}
