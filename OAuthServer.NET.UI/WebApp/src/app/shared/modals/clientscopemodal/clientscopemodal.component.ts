import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-clientscopemodal',
  templateUrl: './clientscopemodal.component.html',
  styleUrls: ['./clientscopemodal.component.scss']
})
export class ClientscopemodalComponent {
  existingClientScopes: IClientScope[] = [];
  scopeName: string;
  isCreate: boolean;

  // Removed the redundant 'data' property to avoid initialization issues.

  constructor(private dialogRef: MatDialogRef<ClientscopemodalComponent>,
    @Inject(MAT_DIALOG_DATA) private dataInstance: IClientScopeModalData) {
      this.existingClientScopes = dataInstance.existingScopes;
      this.isCreate = dataInstance.isCreate;
      this.scopeName = dataInstance.scopeName;
    }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.dataInstance.scopeName = this.scopeName;
    this.dataInstance.isConfirmed = true;
    this.dialogRef.close(this.dataInstance);
  }

  get isValidForSave(): boolean {
    return this.scopeName &&
      this.scopeName !== '' &&
      this.existingClientScopes.filter(x => x.scopeName.toLowerCase() === this.scopeName.toLowerCase()).length == 0;
  }
}
