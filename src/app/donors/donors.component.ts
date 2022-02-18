import { Component, OnInit } from '@angular/core';
import { DonorList } from '../model/donor-list.model';
import { CategoriesService } from '../services/categories.service';
import { DonorsService } from '../services/donors.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  donorList: DonorList = new DonorList();
  categories: string [] = [];

  queryParams = {
    page: 1,
    pageSize: 6,
    filter: {
      categories: undefined,
      minValue: undefined,
      maxValue: undefined
    }
  }
  constructor(private service: DonorsService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getAll();
  }

  getAll() : void {
 
    this.service.getAll(this.queryParams).subscribe((x: DonorList) => {
      this.donorList = x;
    })
  }

  getCategories() : void {
    this.categoriesService.getCategories().subscribe((data: string[]) => {
      this.categories = data;
    })
  }

  pageChange(newPage: number) {
    this.queryParams.page = newPage;
    this.getAll();
  }
}
