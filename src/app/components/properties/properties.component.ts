import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PropertiesService } from 'src/app/services/properties.service';
import { IContent, IPagination } from 'src/app/models/properties';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
  providers: [PropertiesService]
})
export class PropertiesComponent {

  listData!: IContent[];
  paginationInfo!: IPagination;

  displayedColumns: string[] = ['id', 'title', 'type', 'location', 'image'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private propertiesService: PropertiesService){}

  ngOnInit(){
    this.fetchProperties();
  }

  fetchProperties(){
    this.propertiesService.getProperties().subscribe(data => {
      this.listData = data.content;
      this.paginationInfo = data.pagination;
      this.dataSource = new MatTableDataSource(this.listData);
      this.dataSource.paginator = this.paginator;
    });
  }

  fetchNextProperties(url: string){
    this.propertiesService.getProperties(url).subscribe(data => {
      this.listData.push(...data.content);
      this.paginationInfo = data.pagination;
      this.dataSource = new MatTableDataSource(this.listData);
      this.dataSource._updateChangeSubscription();
      this.dataSource.paginator = this.paginator;
    });
  }

  pageChanged(event: PageEvent) {
    console.log(this.paginationInfo.next_page);
    this.fetchNextProperties(this.paginationInfo.next_page);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
