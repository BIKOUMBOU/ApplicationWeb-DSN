import { Component, OnInit } from '@angular/core';
import { Site } from'./site';
import { SiteService } from './site.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sites: Site[];

  constructor(private siteService: SiteService) {}

  ngOnInit(){
    this.getSites();
  }

  public getSites(): void{
    this.siteService.getSites().subscribe(
      (response: Site[]) => {
        this.sites = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  title = 'Gestion Suivi Installation Dsn';
}
