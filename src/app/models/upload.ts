export class Upload {
  $key : string;
  file: File;
  name : string;
  url : string;
  progress :number;
  createAt : Date = new Date();
  fileList : FileList;
  constructor(fileList){
    this.fileList = fileList;
    console.log('En constructor ',this.fileList );
  }

}
