import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatePostComponentComponent } from '../create-post-component/create-post-component.component';
import { ModalService } from '../modal.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
})
export class TableUsersComponent implements OnInit {
  displayedColumns: string[] = [
    'Nombre',
    'Username',
    'Direccion',
    'Correo',
    'Phone',
  ];
  dataSource: any[] = [];
  result: any = {};
  posts: any[] = [];
  expansionStates: boolean[] = [];
  activeRowIndex: number | null = null;
  constructor(private http: HttpClient, private modalService: ModalService) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        this.dataSource = data.map((user: any) => ({
          Nombre: user.name,
          Username: user.username,
          Direccion: `${user.address.street}`,
          Correo: user.email,
          Phone: user.phone,
          Id: user.id,
        }));

        this.expansionStates = new Array(this.dataSource.length).fill(false);
      });
  }

  openCreatePostModal(userId: number): void {
    console.log(userId);
    this.modalService
      .openCreatePostModal(userId)
      .then((result) => {
        this.result = result;
      })
      .catch((error) => {
        console.error('Error del modal:', error);
      });
  }
  toggleDetails(index: number): void {
    this.http
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.dataSource[index].Id}/posts`
      )
      .subscribe((posts: any) => {
        this.posts = posts;
      });

    this.activeRowIndex = this.activeRowIndex === index ? null : index;
  }
}
