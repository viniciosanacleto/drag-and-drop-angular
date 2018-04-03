import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFilesChange(fileList : Array<File>){
    console.log(fileList)
  }

}
