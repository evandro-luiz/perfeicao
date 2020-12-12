import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadpodologoPage } from './cadpodologo.page';

describe('CadpodologoPage', () => {
  let component: CadpodologoPage;
  let fixture: ComponentFixture<CadpodologoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadpodologoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadpodologoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
