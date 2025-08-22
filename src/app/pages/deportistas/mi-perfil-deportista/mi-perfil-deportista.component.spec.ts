import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiPerfilDeportistaComponent } from './mi-perfil-deportista.component';

describe('MiPerfilDeportistaComponent', () => {
  let component: MiPerfilDeportistaComponent;
  let fixture: ComponentFixture<MiPerfilDeportistaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPerfilDeportistaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiPerfilDeportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
