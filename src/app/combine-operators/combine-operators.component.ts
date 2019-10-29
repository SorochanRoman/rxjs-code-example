import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { merge, zip } from 'rxjs';
import { combineLatest } from 'rxjs';

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
        inputValue: [],
        inputCurrency: []
      }),
      outputCard: this.fb.group({
        outputValue: [],
        outputCurrency: []
      }),
      tax: []
    });

    // this.form.get('inputCard').valueChanges.subscribe(inputCard => {
    //   console.log('inputCard', inputCard);
    // });

    // this.form.get('outputCard').valueChanges.subscribe(outputCard => {
    //   console.log('outputCard', outputCard);
    // });

    merge(this.form.get('inputCard').valueChanges,
      this.form.get('outputCard').valueChanges).subscribe(merge => {
        console.log('merge', merge);
      });

    combineLatest(this.form.get('inputCard').valueChanges, this.form.get('outputCard').valueChanges).subscribe(combineLatest => {
      console.log('combineLatest', combineLatest);
    });

    zip(this.form.get('inputCard').valueChanges,
      this.form.get('outputCard').valueChanges).subscribe(zip => {
        console.log('zip', zip);
      });
  }

}
