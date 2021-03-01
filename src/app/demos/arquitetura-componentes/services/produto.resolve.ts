import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Produto } from "../models/produto";
import { ProdutoService } from "./produto.service";

@Injectable()

export class ProdutoResolve implements Resolve<Produto[]> {

    constructor(private produtoService: ProdutoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.produtoService.obterTodos(route.params.estado);
    }
}