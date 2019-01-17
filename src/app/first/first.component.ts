import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'weather-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {

      // if (matches) {
      //   return [
      //     { title: 'Today', cols: 1, rows: 1 },
      //     { title: 'Card 2', cols: 1, rows: 1 },
      //     { title: 'Card 3', cols: 1, rows: 1 },
      //     { title: 'Card 4', cols: 1, rows: 1 }
      //   ];
      // }

      return [
        { title: 'Today', cols: 1, rows: 1 },
        { title: 'tomorrow', cols: 1, rows: 1 },
        { title: 'This Month', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  getBackgroundImageUrl(url: string): string {

    return `${environment.assestsUrl}/img/${url}`;
  }
}
