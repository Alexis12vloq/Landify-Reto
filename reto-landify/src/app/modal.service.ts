import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponentComponent } from './create-post-component/create-post-component.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openCreatePostModal(userId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(CreatePostComponentComponent, {
        width: '400px',
        data: { userId },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          resolve(result);
        } else {
          reject('No se ha devuelto ningún resultado');
        }
      });
    });
  }
}
