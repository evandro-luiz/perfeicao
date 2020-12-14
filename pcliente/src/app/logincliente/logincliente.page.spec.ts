import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginclientePage } from './logincliente.page';

describe('LoginclientePage', () => {
  let component: LoginclientePage;
  let fixture: ComponentFixture<LoginclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
