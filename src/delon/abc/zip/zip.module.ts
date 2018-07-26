import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { ZipService } from '@delon/abc/zip/zip.service';
import { ZipConfig, DA_ZIP_CONFIG } from '@delon/abc/zip/interface';

@NgModule({
  imports: [CommonModule, DelonUtilModule],
})
export class AdZipModule {
  static forRoot(config?: ZipConfig): ModuleWithProviders {
    return {
      ngModule: AdZipModule,
      providers: [ZipService, { provide: DA_ZIP_CONFIG, useValue: config }],
    };
  }
}