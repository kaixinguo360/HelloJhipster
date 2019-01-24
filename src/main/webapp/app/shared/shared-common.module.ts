import { NgModule } from '@angular/core';

import { MyListSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MyListSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MyListSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MyListSharedCommonModule {}
