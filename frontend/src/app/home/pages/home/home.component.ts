import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemListComponent } from 'src/app/home/components/item-list/item-list.component';
import { Location } from 'src/app/shared/models/location.model';
import { LocationService } from 'src/app/shared/services/location.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterLink, HttpClientModule, ItemListComponent, ]
})
export class HomeComponent implements OnInit {
  locations: Location[] = [];

  constructor(private locationService: LocationService, private title: Title, private meta: Meta) {
    this.title.setTitle('Početna - Dobro došli');
    this.meta.addTags([
      { name: 'description', content: 'Sve informacije na jednom mjestu o izletištu Smetovi kod Zenice' },
      { name: 'keywords', content: 'Smetovi, Izletište, Zenica, Snijeg' }
    ]);
  }
  
  ngOnInit() {
    this.locationService.getLocations().subscribe(data => {
      this.locations = data; // Assuming 'locations' is the key in your JSON
    });
  }
}
