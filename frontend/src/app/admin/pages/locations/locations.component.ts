import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from 'src/app/shared/models/location.model';
import { LocationService } from 'src/app/shared/services/location.service';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [RouterLink, TableComponent],
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  columns = [
    { key: 'id', label: 'ID' },
    { key: 'image', label: 'Slika' },
    { key: 'name', label: 'Ime' },
    { key: 'description', label: 'Opis' },
    { key: 'actions', label: 'Akcije' }
  ];
  locations: Location[] = [];
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.locationService.getLocations().subscribe({
      next: (locations: Location[]) => {
        this.locations = locations;
      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    });
  }
  onClick() {
    console.log('Link clicked!');
  }
}
