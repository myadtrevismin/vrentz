import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/listing';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit {

  listings = elemetd;
  constructor() { }

  ngOnInit(): void {
  }

}

const elemetd: Listing[] = [
  {
    unitname : 'A1',
    address: {
      street1: 'Maple Street',
      street2: 'Box 203',
      zip1: '23456',
      city: 'San Francisco',
      state: `CA`,
      country: `USA`
    },
    previouslease: [
      {
        from: '01/01/2018',
        to: '01/01/2019'
      },
      {
        from: '01/01/2017',
        to: '01/01/2018'
      }
    ],
    status: 'Vacant',
    lease: false,
    image: `assets/images/rental1.jpg`,
    price: 500,
  },
  {
    unitname : 'B1',
    address: {
      street1: 'Battery Street',
      street2: 'Box 204',
      zip1: '98765',
      city: 'San Francisco',
      state: `CA`,
      country: `USA`
    },
    previouslease: [
      {
        from: '01/01/2018',
        to: '01/01/2019'
      },
      {
        from: '01/01/2017',
        to: '01/01/2018'
      }
    ],
    status: 'Vacant',
    lease: false,
    image: `assets/images/rental2.jpg`,
    price: 600,
  },
  {
    unitname : 'C1',
    address: {
      street1: 'Fern Street',
      street2: 'Box 988',
      zip1: '98765',
      city: 'San Francisco',
      state: `CA`,
      country: `USA`
    },
    previouslease: [
      {
        from: '01/01/2020',
        to: '01/01/2021'
      },
      {
        from: '01/01/2018',
        to: '01/01/2019'
      }
    ],
    status: 'Occupied',
    lease: true,
    image: `assets/images/rental3.jpg`,
    price: 1000
  }
];
