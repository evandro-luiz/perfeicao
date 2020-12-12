import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginpodologoPage } from './loginpodologo.page';

describe('LoginpodologoPage', () => {
  let component: LoginpodologoPage;
  let fixture: ComponentFixture<LoginpodologoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpodologoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginpodologoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
