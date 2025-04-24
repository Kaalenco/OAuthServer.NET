import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-clientcorsoriginmodal',
  templateUrl: './clientcorsoriginmodal.component.html',
  styleUrls: ['./clientcorsoriginmodal.component.scss']
})
export class ClientcorsoriginmodalComponent {
  existingCORSOrigins: IClientCORSOrigin[] = [];
  originURI: string;
  isCreate: boolean;

  // Removed redundant data property

  constructor(private dialogRef: MatDialogRef<ClientcorsoriginmodalComponent>,
    @Inject(MAT_DIALOG_DATA) private dataInstance: IClientCORSOriginModalData) {
      this.existingCORSOrigins = dataInstance.existingCORSOrigins;
      this.isCreate = dataInstance.isCreate;
      this.originURI = dataInstance.originURI;
    }

  onNoClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.dataInstance.originURI = this.originURI;
    this.dataInstance.isConfirmed = true;
    this.dialogRef.close(this.dataInstance);
  }

  get isValidForSave(): boolean {
    return this.originURI &&
      this.originURI !== '' &&
      this.existingCORSOrigins.filter(x => x.originURI.toLowerCase() === this.originURI.toLowerCase()).length == 0;
  }

}
