import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-combine-operators',
  templateUrl: './combine-operators.component.html',
  styleUrls: ['./combine-operators.component.css']
})
export class CombineOperatorsComponent implements OnInit {

  form: FormGroup;
  currencies = ['USD', 'UAH'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      contact: this.fb.group({
        firstName: [],
        lastName: [],
        phone: []
      }),
      inputCard: this.fb.group({
        value: [],
        currency: []
      }),
      outputCard: this.fb.group({
        value: [],
        currency: []
      }),
      tax: []
    });


  }

}
