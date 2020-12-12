import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilclientePage } from './perfilcliente.page';

describe('PerfilclientePage', () => {
  let component: PerfilclientePage;
  let fixture: ComponentFixture<PerfilclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
