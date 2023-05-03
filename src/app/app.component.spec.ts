import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { WebsitePipe } from './pipes/website.pipe';

const usersListMock = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];

const userServiceMock = {
  getUsers: jest.fn(),
  getCustomUser: jest.fn(),
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, WebsitePipe],
      providers: [{ provide: UserService, useValue: userServiceMock }],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    userServiceMock.getUsers.mockReturnValue(of(usersListMock));
    userServiceMock.getCustomUser.mockReturnValue(of({}));
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should call getUsers and getCustomUser', () => {
    app.ngOnInit();
    expect(userServiceMock.getUsers).toHaveBeenCalled();
    expect(userServiceMock.getCustomUser).toHaveBeenCalledTimes(1);
  });

  it(`should have as title 'angular-testing-with-jest'`, () => {
    expect(app.title).toEqual('angular-testing-with-jest');
  });

  it('should render 3 trs', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const trs = compiled.getElementsByTagName('tr');
    expect(trs.length).toBe(3);

    // const trs = fixture.debugElement.queryAll(By.css('tr'));
    // expect(trs.length).toBe(3);
  });
});
