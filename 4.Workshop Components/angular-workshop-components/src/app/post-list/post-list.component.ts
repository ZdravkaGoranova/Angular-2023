import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getPost(5).subscribe((posts)=>{
      console.log({posts})
    })
  }
}
