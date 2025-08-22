import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiPerfilEntrenadorComponent } from './mi-perfil-entrenador.component';

describe('MiPerfilEntrenadorComponent', () => {
  let component: MiPerfilEntrenadorComponent;
  let fixture: ComponentFixture<MiPerfilEntrenadorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPerfilEntrenadorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiPerfilEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
