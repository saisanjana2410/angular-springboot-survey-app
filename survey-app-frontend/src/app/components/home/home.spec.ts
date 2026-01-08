//Names:
 //Sanjana Kambalapally - G01506405
 //Shreya Shitole - G01517081
 //Shravani Vasa - G01543148
 //Akhil Akkineni - G01547445

 //THis file has unit tests for home component.


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
