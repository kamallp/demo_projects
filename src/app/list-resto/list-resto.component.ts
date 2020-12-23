import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  collection:any=[];
  public temp:boolean = false;
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.resto.getList().subscribe((result)=>{
      if(result!=null)
      {
      this.collection = result;
      this.temp = true;
      }
    })
  }
  deleteResto(item){
    this.collection.splice(item-1, 1);
    this.resto.deleteResto(item).subscribe((deletedData)=>{
      window.location.reload();
    })
  }
 
}
