import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomTable';
  headers = ["ID", "Car type", "Brand", "Model", "Owner"];
  rows = [
  {"ID": 1, "Car type": 'CONVERTIBLE', "Brand": 'Mazda', "Model": 'Miata', "Owner": 'Ivanov Ivan'},
  {"ID": 2, "Car type": 'SPORTS CAR', "Brand": 'Ford', "Model": 'Mustang', "Owner": 'Petrov Petr'},
  {"ID": 3, "Car type": 'SEDAN', "Brand": 'Nissan', "Model": 'Versa', "Owner": 'Ivanov Petr'},
  {"ID": 4, "Car type": 'SPORTS CAR', "Brand": 'Ferrari', "Model": '488', "Owner": 'Petrov Petr'},
  {"ID": 5, "Car type": 'SEDAN', "Brand": 'Toyota', "Model": 'Avalon', "Owner": 'Sidorov Oleg'},
  {"ID": 6, "Car type": 'MINIVAN', "Brand": 'Honda', "Model": 'Odyssey', "Owner": 'Ivanov Oleg'},
  {"ID": 7, "Car type": 'SEDAN', "Brand": 'Honda', "Model": 'Accord', "Owner": 'Petrov Oleg'},
  {"ID": 8, "Car type": 'MINIVAN', "Brand": 'Chrysler', "Model": 'Pacifica', "Owner": 'Ivanov Oleg'},
  {"ID": 9, "Car type": 'SEDAN', "Brand": 'Kia', "Model": 'Rio', "Owner": 'Petrov Petr'},
  {"ID": 10, "Car type": 'PICKUP TRUCK', "Brand": 'Honda', "Model": 'Ridgeline', "Owner": 'Ivanov Vasyl'}
  ]
}
