import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManPage } from './man.page';

describe('ManPage', () => {
  let component: ManPage;
  let fixture: ComponentFixture<ManPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
