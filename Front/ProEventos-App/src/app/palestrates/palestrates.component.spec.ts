/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PalestratesComponent } from './palestrates.component';

describe('PalestratesComponent', () => {
  let component: PalestratesComponent;
  let fixture: ComponentFixture<PalestratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalestratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
