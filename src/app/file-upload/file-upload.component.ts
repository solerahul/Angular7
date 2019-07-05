import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export class file {
  fileName: string;
  size: string;
  type: string;
  path: string;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  name = 'Angular 5';
  fileUrl;

  constructor(private sanitizer: DomSanitizer) { }

  public arr: any = [];

  ngOnInit() {



  }

  filesPicked(files) {

    if (files.length) {
      //alert(7)
    }

    for (let i = 0; i < files.length; i++) {
      debugger;
      const file = files[i];
      const fName = file.webkitRelativePath.split('/');
      const fPath = file.webkitRelativePath;
      const fType = file.type;
      const fSize = file.size;

      const data = file;
      //const data = 'some text';
      //const blob = new Blob([data], { type: 'application/octet-stream' });
      //const _fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(fPath));
      //alert(data);
      this.arr.push({ fileName: fName, size: fSize, type: fType, path: fPath, fileUrl: fPath })
    }

  }
}


