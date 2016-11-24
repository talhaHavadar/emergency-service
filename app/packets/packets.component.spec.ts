/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PacketsComponent } from './packets.component';

describe('PacketsComponent', () => {
  let component: PacketsComponent;
  let fixture: ComponentFixture<PacketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});