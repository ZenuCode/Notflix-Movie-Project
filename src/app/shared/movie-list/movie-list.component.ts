import { Component } from '@angular/core';
import { ApiService } from '../../core/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  id : any;
  baseUrl = "https://image.tmdb.org/t/p/original";
  tempUrl = "https://image.tmdb.org/t/p/w200";
  movieList : any;
  page = 1;
  
  constructor(private service: ApiService, private router: Router) {}

  setId(movieId: number) {
    console.log(movieId)
    this.id = movieId.toString();
    this.service.setId(movieId.toString());
    this.router.navigate(['/movie-details']);
  }

  onScroll() {
    this.service.getData(++this.page).subscribe(res => {
      let newList : any = res;
      newList = newList.results;
      newList.forEach((ele : any) => {
        ele.poster_path = this.tempUrl + ele.poster_path;
      })
      this.movieList = [...this.movieList, ...newList];
    });
    console.log(this.movieList);
  }

  ngOnInit() {
    this.service.getData(this.page).subscribe(res => {
      this.movieList = res;
      this.movieList = this.movieList.results;
      this.movieList.forEach((ele : any) => {
        ele.poster_path = this.tempUrl + ele.poster_path;
      })
      console.log(this.movieList);
    })
  }
}
