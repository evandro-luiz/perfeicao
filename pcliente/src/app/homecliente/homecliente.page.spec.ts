import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeclientePage } from './homecliente.page';

describe('HomeclientePage', () => {
  let component: HomeclientePage;
  let fixture: ComponentFixture<HomeclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
