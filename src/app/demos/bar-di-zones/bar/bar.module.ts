import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { BarComponent } from "./bar.component";
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from "./bar.config";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
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
