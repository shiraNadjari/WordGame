import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { CategoryimagesPage } from '../pages/categoryimages/categoryimages';
import { ImagePage } from'../pages/image/image';
import { ImagesProvider } from '../providers/images-service/images-service';
import { CategoriesServiceProvider }from '../providers/categories-service/categories-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,CategoryPage
    ,CategoryimagesPage,ImagePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage
    ,CategoryimagesPage,ImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagesProvider,
    CategoriesServiceProvider
  ]
})
export class AppModule {}
