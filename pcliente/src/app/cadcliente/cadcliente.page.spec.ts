import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadclientePage } from './cadcliente.page';

describe('CadclientePage', () => {
  let component: CadclientePage;
  let fixture: ComponentFixture<CadclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
