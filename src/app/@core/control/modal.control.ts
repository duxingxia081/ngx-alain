import { OnInit, OnDestroy, Injector } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { AppControl } from './app.control';

export class ModalControl extends AppControl implements OnInit, OnDestroy {
  constructor(protected injector: Injector) {
    super(injector);
  }

  get modalRef() {
    return this.injector.get(NzModalRef);
  }

  ngOnInit() {
    super.ngOnInit();
    this.appBase.__getPrimaryKeyValue();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  modalClose(result?: any) {
    if (!result) result = false;
    this.modalRef.destroy(result);
  }

  get modalTitle() {
    if (this.modalData.title) {
      return this.modalData.title;
    } else {
      return this.dataSource.val ? '编辑' : '添加';
    }
  }

  protected __init(url: string, key: any, params?: any) {
    super.__init(url, key, params);
  }

  // ------------------

  formatSubmitData(formValue: any, schema?: any): object {
    schema = schema || this.schemaData.edit;
    formValue = formValue || {};
    const prop = schema.properties;
    let widget = null;
    for (const idx of Object.keys(formValue)) {
      if (
        formValue[idx] &&
        (this.helpers.isArray(formValue[idx]) ||
          this.helpers.isObject(formValue[idx]))
      ) {
        if (prop && prop[idx] && prop[idx].ui) {
          if (this.helpers.isString(prop[idx].ui)) {
            widget = prop[idx].ui;
          } else {
            widget = prop[idx].ui.widget;
          }
          if (widget.indexOf('upload') > -1) {
            formValue[idx] = this.helpers.formatUploadFilesToString(
              formValue[idx],
            );
          }
          if (widget.indexOf('cascader') > -1) {
            formValue[idx] = this.helpers.formatCascaderToString(
              formValue[idx],
            );
          }
        }
      }
    }
    return formValue;
  }
}
