import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsqsenhaPage } from './esqsenha.page';

describe('EsqsenhaPage', () => {
  let component: EsqsenhaPage;
  let fixture: ComponentFixture<EsqsenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsqsenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsqsenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
