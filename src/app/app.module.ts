import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatDialogModule} from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import {  } from "module";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RestaurentsComponent } from './restaurents/restaurents.component';
import { LogoutComponent } from './logout/logout.component';
import { OwnerMenuComponent } from './owner-menu/owner-menu.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import { FilterPipe } from './shared/filter.pipe';
import { PaymentImplementComponent } from './payment-implement/payment-implement.component';
// import { OwnermenuComponent } from './ownermenu/ownermenu.component';
// import { ReactiveFormsModule } from '@angular/forms';


// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    MenuComponent,
    CartComponent,
    RestaurentsComponent,
    LogoutComponent,
    OwnerMenuComponent,
    SearchComponent,
    FilterComponent,
    ImageCropComponent,
    GoogleAuthComponent,
    FilterPipe,
    PaymentImplementComponent,
    // NgbDropdownModule
    // OwnermenuComponent,
  
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    SocialLoginModule

    // MatDialogModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '136016871239-9nqpdqdvitliq3kf52gdu62a3q3h031c.apps.googleusercontent.com'
            )
          },
         
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
