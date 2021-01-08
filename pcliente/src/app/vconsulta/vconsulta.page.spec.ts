import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VconsultaPage } from './vconsulta.page';

describe('VconsultaPage', () => {
  let component: VconsultaPage;
  let fixture: ComponentFixture<VconsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VconsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VconsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
