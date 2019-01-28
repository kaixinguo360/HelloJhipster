import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyListTagModule } from './tag/tag.module';
import { MyListPostModule } from './post/post.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MyListTagModule,
        MyListPostModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyListEntityModule {}
