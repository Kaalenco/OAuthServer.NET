import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmationmodal',
  templateUrl: './confirmationmodal.component.html',
  styleUrls: ['./confirmationmodal.component.scss']
})
export class ConfirmationmodalComponent implements OnInit {
  data: IConfirmationModalData;

  constructor(private dialogRef: MatDialogRef<ConfirmationmodalComponent>,
    @Inject(MAT_DIALOG_DATA) private dataInstance: IConfirmationModalData) {
      this.data = this.dataInstance;
  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
