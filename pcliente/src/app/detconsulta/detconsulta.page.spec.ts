import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetconsultaPage } from './detconsulta.page';

describe('DetconsultaPage', () => {
  let component: DetconsultaPage;
  let fixture: ComponentFixture<DetconsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetconsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetconsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
