import { Component, OnInit } from '@angular/core';

/**
 * Code heavily taken from https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
 */
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  file: File;
  typeError: string;
  sizeError: string;
  classes: string[] = [];
  fileover = false;

  constructor() { }

  ngOnInit() {
  }

  getClass(): string[] {

    const hover = new Array<string>();
    if(this.fileover) hover.push('hover');

    return this.classes.concat(hover);
  }

  dropHandler(ev: DragEvent) {

    ev.stopPropagation();
    ev.preventDefault();

    this.fileover = false;
    
    if (ev.dataTransfer.items) {

      // Use DataTransferItemList interface to access the file(s)
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[0].kind === 'file') {
        this.file = ev.dataTransfer.items[0].getAsFile();
        console.log('... file[' + 0 + '].name = ' + this.file.name);
        console.log('... file[' + 0 + '].type = ' + this.file.type);

        if(this.file.type !== 'application/pdf') {
          this.typeError = 'Document expected!';
        } else {
          this.typeError = null;
        }

        const sizeInMB = this.file.size / (1_000_000);

        if (sizeInMB > 10) {
          this.sizeError = 'File exceeds maximum permitted size!';
        } else {
          this.sizeError = null;
        }
      }
    } else {

      console.log('files');
      console.log(JSON.stringify(ev.dataTransfer.files));
      
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    }
  }

  dragEnterHandler(ev: DragEvent) {
    ev.stopPropagation();
    ev.preventDefault();
    
    this.fileover = true;
  }

  dragOverHandler(ev: DragEvent) {
    ev.stopPropagation();
    ev.preventDefault();
  }

  dragLeaveHandler(ev: DragEvent) {
    ev.stopPropagation();
    ev.preventDefault();

    this.fileover = false;
  }
}
