import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-create-post-component',
  templateUrl: './create-post-component.component.html',
  styleUrls: ['./create-post-component.component.css'],
})
export class CreatePostComponentComponent {
  postTitle: string = '';
  postBody: string = '';

  constructor(
    private dialogRef: MatDialogRef<CreatePostComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: number },
    private http: HttpClient
  ) {}

  savePost(): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const userId = this.data.userId;
    const postData = {
      title: this.postTitle,
      body: this.postBody,
      userId: userId,
    };

    this.http
      .post('https://jsonplaceholder.typicode.com/posts', postData, { headers })
      .subscribe((response: any) => {
        this.dialogRef.close(response);
      });
  }
}
