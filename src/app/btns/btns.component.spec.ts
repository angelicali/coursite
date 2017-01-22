/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BtnsComponent } from './btns.component';

describe('BtnsComponent', () => {
  let component: BtnsComponent;
  let fixture: ComponentFixture<BtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
