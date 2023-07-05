import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: Post[] = [];
  isLoading: boolean = true;
  thereAreNoPosts: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getPost(5).subscribe({
      next: (posts) => {
        // console.log({ posts })
        console.log(posts[0])
        this.postList = posts;
        this.isLoading = false;
        if (this.postList.length === 0) {
          this.thereAreNoPosts = true;
        }


      }, error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err}`)
      },

    });
  }
}