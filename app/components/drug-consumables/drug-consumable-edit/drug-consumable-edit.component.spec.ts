/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrugConsumableEditComponent } from './drug-consumable-edit.component';

describe('DrugConsumableEditComponent', () => {
  let component: DrugConsumableEditComponent;
  let fixture: ComponentFixture<DrugConsumableEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugConsumableEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugConsumableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});