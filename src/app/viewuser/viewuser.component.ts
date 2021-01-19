import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  constructor(private resto:RestoService) { }
  userList:any=[];
  public temp:boolean = false;
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.resto.getUsers().subscribe((result)=>{
      if(result!=null)
      {
      this.userList = result;
      console.log(this.userList);
      this.temp = true;
      }
    })
  }

}
