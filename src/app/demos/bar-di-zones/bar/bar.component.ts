import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
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
    private bebidaService: BebidaService) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.dadosUnidade = this.barServices.obterUnidade();
    this.barBebida2 = this.bebidaService.obterBebidas();
  }
}
