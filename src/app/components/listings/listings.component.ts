import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Listing, LeaseDates } from 'src/app/models/listing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListingsComponent implements OnInit {

  dataSource = elemetd;
  columnsToDisplay = ['unitname', 'status', 'lease' ];
  expandedElement: Listing;
  listForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.listForm = fb.group({
      StartDate : [null, Validators.required],
      EndDate : [null, Validators.required],
      Reason : [null, Validators.compose([Validators.minLength(3), Validators.maxLength(500)])]
    });
   }

  ngOnInit(): void {

  }

  onListingSubmit(formValue: FormGroup, previouslease: LeaseDates[]){
    if (formValue.invalid){
      return;
    }

    const newLease: LeaseDates = {
      from : formValue.value.StartDate,
      to: formValue.value.EndDate
    };
    previouslease.push(newLease);
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
  },
  {
    unitname : 'B1',
    address: {
      street1: 'Battery Street',
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
  },
  {
    unitname : 'C1',
    address: {
      street1: 'Fern Street',
      street2: 'Box 203',
      zip1: '23456',
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
  }
];
