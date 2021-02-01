import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WomanPage } from './woman.page';

describe('WomanPage', () => {
  let component: WomanPage;
  let fixture: ComponentFixture<WomanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WomanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
