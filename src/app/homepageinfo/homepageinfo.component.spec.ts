import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageinfoComponent } from './homepageinfo.component';

describe('HomepageinfoComponent', () => {
  let component: HomepageinfoComponent;
  let fixture: ComponentFixture<HomepageinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
