import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../Models/category.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
 
  camponentName:string = "Categories";
  Categories: Category[];
  displayedColumns: string[] = ['name', 'description', 'actions'];
  dataSource: MatTableDataSource<Category>;  

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;  

  constructor(private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title) 
  { 
    this.Categories = [
      {
        name: "Cat1",
        description: "Category1"
      },
      {
        name: "Cat2",
        description: "Category2"
      },
      {
        name: "Cat3",
        description: "Category3"
      }
    ];

    this.dataSource = new MatTableDataSource(this.Categories);
  }

  ngOnInit(): void {
    
    this.titleService.setTitle(this.camponentName);
    this.logger.log(this.camponentName + ' loaded');
    this.notificationService.openSnackBar(this.camponentName + ' loaded');
    this.dataSource.sort = this.sort;
  }

}
