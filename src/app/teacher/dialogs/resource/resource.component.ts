import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  name;
  constructor(public dialogRef: MatDialogRef<ResourceComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit() {
  }

  submit() {
    if (this.name) {
      this.dialogRef.close({name: this.name});
    }
  }

  dismiss() {
    this.dialogRef.close();
  }

}
