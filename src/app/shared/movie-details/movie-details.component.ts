import { Component, Input, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/service';
import { YouTubePlayer } from '@angular/youtube-player';
import { LocalStorageService } from '../../core/localStorage';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  @ViewChild('myPlayer') youtubePlayer!: YouTubePlayer;
  getId: any;
  videoId: any;
  baseUrl = "https://image.tmdb.org/t/p/original";
  movieList : any;
  movieInfo : any;
  movieMedia : any;
  movieCredits : any;
  movieImages : any;
  showVideoPopup: boolean = false;

  constructor(private service: ApiService, private localStorage: LocalStorageService) {}

  openVideoPopup() {
    this.showVideoPopup = true;
    this.getVideo(this.getId);
  }

  getVideo(id: number) {
    this.showVideoPopup = true;
    this.service.getVideo(id).subscribe((res: any) => {
      this.videoId = res.results[0].key;
      this.youtubePlayer.videoId = this.videoId;
    });
  }

  stopVideo() {
    this.showVideoPopup = false;
  }

  getData() {
    this.service.getMedia(this.getId).subscribe(res => {
      this.movieMedia = res;
    })

    this.service.getData(1).subscribe(res => {
      this.movieList = res;
      this.movieList = this.movieList.results;
      this.movieList.forEach((ele : any) => {
        if (ele.id == this.getId) {
          this.movieInfo = ele;
          ele.poster_path = this.baseUrl + ele.poster_path;
          ele.backdrop_path = this.baseUrl + ele.backdrop_path;
        }
      })
    })

    this.service.getImages(this.getId).subscribe(res => {
      this.movieImages = res;
      this.movieImages = this.movieImages.backdrops;
      this.movieImages.forEach((ele : any) => {
        ele.file_path = this.baseUrl + ele.file_path;
      })
    })

    this.service.getCredits(this.getId).subscribe(res => {
      this.movieCredits = res;
      this.movieCredits = this.movieCredits.cast;
      this.movieCredits.forEach((ele : any) => {
          ele.profile_path = this.baseUrl + ele.profile_path;
      })
    })
  }

  ngOnInit() {
    this.service.id$.subscribe(id => { 
      this.getId = id; 
      if (id == null || id == undefined || id == "") {
        this.getId = this.localStorage.getItem("movieId");
        this.getData();
      } else if (id != null || id != undefined) {
        this.localStorage.setItem("movieId", this.getId);
        this.getData();
      }
    });
  }
}
