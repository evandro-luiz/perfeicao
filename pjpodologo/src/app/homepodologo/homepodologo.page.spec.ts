import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomepodologoPage } from './homepodologo.page';

describe('HomepodologoPage', () => {
  let component: HomepodologoPage;
  let fixture: ComponentFixture<HomepodologoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepodologoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomepodologoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
