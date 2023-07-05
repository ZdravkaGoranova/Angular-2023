import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themeList: Theme[] = [];
  // themeList: Theme[] = | undefined=undefined;
  // themeList: Theme[] = | null=null;
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getThemes().subscribe({
      next: (themes) => {
        // console.log({ themes })
        this.themeList = themes;
        this.isLoading = false;
      }
      , error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err}`)
      },
    })
  }
}
