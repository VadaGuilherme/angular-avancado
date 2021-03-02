import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgBrazil, TextMask } from 'ng-brazil'
import { CustomFormsModule } from 'ng2-validation'

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app.routes';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarModule } from './demos/bar-di-zones/bar/bar.module';
import { BarServices } from './demos/bar-di-zones/bar/bar.service';
import { HttpClient } from '@angular/common/http';

export const BAR_PROVIDER: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
    AdminModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca938c99a9ff91029dc'
    })
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    //BAR_PROVIDER
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
