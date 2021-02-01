import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BabyPage } from './baby.page';

describe('BabyPage', () => {
  let component: BabyPage;
  let fixture: ComponentFixture<BabyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BabyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
