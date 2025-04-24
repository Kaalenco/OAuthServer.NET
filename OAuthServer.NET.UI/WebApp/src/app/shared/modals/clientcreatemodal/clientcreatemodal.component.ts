import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-clientcreatemodal',
  templateUrl: './clientcreatemodal.component.html',
  styleUrls: ['./clientcreatemodal.component.scss']
})
export class ClientcreatemodalComponent {
  grantId: string;
  grants: IGrant[] = [];

  data: IClientCreateModalData;

  constructor(@Inject(MatDialogRef) private dialogRef: MatDialogRef<ClientcreatemodalComponent>,
    @Inject(MAT_DIALOG_DATA) private dataInstance: IClientCreateModalData,
    private cacheService: CacheService) {
      this.grants = dataInstance.grants;
      this.data = this.dataInstance;
   }

   onNoClick() {
     this.dialogRef.close();
   }

   onSaveClick() {
     this.data.grantId = this.grantId;
     this.data.isConfirmed = true;

     this.cacheService.storeGrantId(this.grantId);

     this.dialogRef.close(this.data);
   }

   get isValidForSave(): boolean {
    return this.grantId && this.grantId !== '';
  }
}
