import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, NgZone, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarServices, BarServicesMock, BebidaService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    // { provide: BarServices, useClass: BarServices },
    { provide: BarServices, useFactory: BarFactory, deps: [HttpClient, Injector] },
    { provide: BebidaService, useExisting: BarServices }
  ]
})

export class BarComponent implements OnInit {

  barBebida1: string;
  barBebida2: string;
  configManual: BarUnidadeConfig;
  dadosUnidade: string;

  constructor(
    private barServices: BarServices,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfigManual: BarUnidadeConfig,
    private bebidaService: BebidaService,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.dadosUnidade = this.barServices.obterUnidade();
    this.barBebida2 = this.bebidaService.obterBebidas();
  }

  processWithinAngularZone() {
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado por dentro!'));
  }

  processOutsideOfAngularZone() {
    this.label = 'fora';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => { console.log('Finalizado fora!') });
      });
    });
  }

  public progress: number = 0;
  public label: string;

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }
}
