Drag and Drop Directive for Angular
===============
*A drag-and drop directive with multiples options of file control*

Installation
------------
Copy the content of `_directive` folder to your project (you also can copy the entire folder).

Register the `dnd` directive on your root-module.
```
import { DndDirective } from './_directives/dnd.directive';

@NgModule({
  declarations: [
    ...
    DndDirective
  ],
  imports: [
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

How to Use
----------
In the folder `component` exist an component example of how to use the DnD Directive. Actually you can even copy this component and use in your project.

For use in another component, first you need to create a method to handle the files when they are dropped. In `your_component.component.ts`:
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd',
  templateUrl: './your_component.component.html',
  styleUrls: ['./your_component.component.css']
})
export class your_component implements OnInit {

  ...

  onFilesChange(fileList : Array<File>){
    console.log(fileList)
  }
  
  ...
}
```
Now, everytime that a file or a bunch of files dropped on your DnD zone the method will print the entire list on console.

On the template part `your_component.component.html` we need to add the directive on the `<div>` tag that represent the DnD zone, like this:
```
<div class="dropzone" dnd (filesChangeEmiter)="onFilesChange($event)">
  <div class="text-wrapper">
    <div class="centered">Drop your file here!</div>
  </div>
</div>
```
The important part is `dnd (filesChangeEmiter)="onFilesChange($event)"`.

Now, if you wanna to restrict some kind of file (extension) you just have to put `[extensions] = "['']"` as tag parameter. Like the example, if you wanna work only with `.txt` and `.mp3` files you tell to directive:
```
<div class="dropzone" dnd (filesChangeEmiter)="onFilesChange($event)" [extensions] = "['txt','mp3']">
  <div class="text-wrapper">
    <div class="centered">Drop your file here!</div>
  </div>
</div>
```
As well, the important part is `[extensions] = "['txt','mp3']"` .

If you had to restrict the file by the size you also can set by the directive `[maxSize]="1"`. Note that the number passed is the size of file (in MBs), look the example:
```
<div class="dropzone" dnd (filesChangeEmiter)="onFilesChange($event)" [maxSize]="130">
  <div class="text-wrapper">
    <div class="centered">Drop your file here!</div>
  </div>
</div>
```
In the example the maximum file size allowed is 130mb.
