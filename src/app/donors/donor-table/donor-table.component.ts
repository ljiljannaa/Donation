import { Component, Input, OnInit } from '@angular/core';
import { DonorList } from 'src/app/model/donor-list.model';

@Component({
  selector: 'app-donor-table',
  templateUrl: './donor-table.component.html',
  styleUrls: ['./donor-table.component.css']
})
export class DonorTableComponent implements OnInit {

  @Input()
  donorList: DonorList = new DonorList();
 
  constructor() { }

  ngOnInit(): void {
  }

}
