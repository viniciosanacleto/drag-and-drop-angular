import { Directive, HostListener, HostBinding, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[dnd]'
})
export class DndDirective {

  @Output() private filesChangeEmiter : EventEmitter<File[]> = new EventEmitter();
  @Input() private extensions: Array<string> = [];
  @Input() private maxSize: number = null;


  @HostBinding('style.background') private background = '#eee';

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver(evt){
    this.background = '#999';
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    if(files.length > 0){
      //do some stuff here
    }
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    this.background = '#eee';
    evt.preventDefault();
    evt.stopPropagation();
    //do some stuff
  }

  @HostListener('drop', ['$event']) public onDrop(evt){
    this.background = '#eee';
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    let valid_files: Array<File> = [];
    if(files.length > 0){
      //Check if the files dropped have the allowed extensions
      if(this.extensions.length > 0){
        for(let file of files){
          let ext = file.name.split('.')[file.name.split('.').length - 1];
          if(this.extensions.lastIndexOf(ext) != -1){
            //Check if had a maxSize expecification
            if(this.maxSize!=null){
              let fileSizeMB = (file.size /  1000) /1024;
              if(fileSizeMB <= this.maxSize){
                valid_files.push(file);
              }
            }
            else{
              valid_files.push(file);
            }
          }
        }
        this.filesChangeEmiter.emit(valid_files);
      }
      //If there's none extension restriction emit all files
      else{
        this.filesChangeEmiter.emit(files);
      }

    }
  }

}
