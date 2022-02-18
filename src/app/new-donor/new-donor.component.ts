import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Donor } from '../model/donor.model';
import { CategoriesService } from '../services/categories.service';
import { DonorsService } from '../services/donors.service';

@Component({
  selector: 'app-new-donor',
  templateUrl: './new-donor.component.html',
  styleUrls: ['./new-donor.component.css']
})
export class NewDonorComponent implements OnInit {


  isNew: boolean = true;
  donorId: number = 0;
  donor: Donor = new Donor();
  donationDate: NgbDateStruct = {
    year: 0,
    month: 0,
    day: 0
  };

  categories: string[] = [];
  constructor(private route: ActivatedRoute, private service: DonorsService, private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      if(data['id']) {
        this.isNew = false;
        this.donorId = data['id'];
        this.getOne();
      } else {
        this.isNew = true;
      }
      this.getCategories();

    })
  }

  getOne() : void {
    this.service.getOne(this.donorId).subscribe((data: Donor) => {
      this.donor = data;
      let date = new Date(this.donor.charity_date);
      this.donationDate.year = date.getFullYear();
      this.donationDate.month = date.getMonth();
      this.donationDate.day = date.getDay();
    })
  }

  getCategories() : void {
    this.categoryService.getCategories().subscribe((data: string[]) => {
      this.categories = data;
    })
  }

  sendDonor() : void {
    this.donor.charity_date = new Date(this.donationDate.year,this.donationDate.month,this.donationDate.day).toISOString();
    if(this.isNew) {
      this.service.postDonor(this.donor).subscribe((data: Donor) => {

      })
    } else {
      this.service.putDonor(this.donorId, this.donor).subscribe((data: Donor) => {

      })
    }
  }
}
