import { NgModule } from '@angular/core';
import { AdvisoriesComponent } from './advisories.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { AdvisoriesService } from './advisories.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'advisories', component: AdvisoriesComponent }
    ]),
    SharedModule
  ],
  declarations: [
    AdvisoriesComponent
  ],
  providers: [AdvisoriesService]
})
export class AdvisoriesModule {}
