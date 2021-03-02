import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { BarComponent } from "./bar.component";
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from "./bar.config";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BarComponent
    ],
    exports: [
        BarComponent
    ]
})

export class BarModule {
    static forRoot(config: BarUnidadeConfig): ModuleWithProviders {
        return {
            ngModule: BarModule,
            providers: [
                {
                    provide: BAR_UNIDADE_CONFIG,
                    useValue: config
                }
            ]
        }
    }
}
