import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-clientredirecturimodal',
  templateUrl: './clientredirecturimodal.component.html',
  styleUrls: ['./clientredirecturimodal.component.scss']
})
export class ClientredirecturimodalComponent {
  existingClientRedirectURIs: IClientRedirectURI[] = [];
  redirectURI: string;
  isCreate: boolean;

  data: IClientRedirectURIModalData;

  constructor(private dialogRef: MatDialogRef<ClientredirecturimodalComponent>,
    @Inject(MAT_DIALOG_DATA) private dataInstance: IClientRedirectURIModalData) {
      this.data = this.dataInstance;
      this.existingClientRedirectURIs = dataInstance.existingRedirectURIs;
      this.isCreate = dataInstance.isCreate;
      this.redirectURI = dataInstance.redirectURI;
    }

  onNoClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.data.redirectURI = this.redirectURI;
    this.data.isConfirmed = true;
    this.dialogRef.close(this.data);
  }

  get isValidForSave(): boolean {
    return this.redirectURI &&
      this.redirectURI !== '' &&
      this.existingClientRedirectURIs.filter(x => x.redirectURI.toLowerCase() === this.redirectURI.toLowerCase()).length == 0;
  }
}
