import { Component, Inject, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarServices, BarServicesMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [{
    provide: BarServices, useClass: BarServices //BarServicesMock
  }]
})

export class BarComponent implements OnInit {

  barBebida1: string;
  configManual: BarUnidadeConfig;

  constructor(
    private barServices: BarServices,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfigManual: BarUnidadeConfig) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual;
  }
}
