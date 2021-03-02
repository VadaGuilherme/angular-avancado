import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class BarServices {
    constructor() { }

    obterBebidas(): string {
        return 'Bebidas';
    }

    obterPorcoes(): string {
        return 'Porcoes';
    }

    obterRefeicoes(): string {
        return 'Refeições';
    }
}

export class BarServicesMock {
    obterBebidas(): string {
        return 'Mock Bebidas';
    }

    obterPorcoes(): string {
        return 'Mock Porcoes';
    }

    obterRefeicoes(): string {
        return 'Mock Refeições';
    }
}