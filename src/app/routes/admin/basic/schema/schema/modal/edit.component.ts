import { Component, OnInit, Injector,ChangeDetectionStrategy } from '@angular/core';
import { ModalControl } from '@core';
import { tplModalEditHTML } from '@layout';

@Component({
  selector: 'app-extras-show',
  template: tplModalEditHTML,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SchemaEditComponent extends ModalControl implements OnInit {

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    console.log(this.schemaData.edit);
  }

  save() {
    this.httpSrv.get('./assets/tmp/pois.json').subscribe(() => {
      this.noticeSrv.msgSuccess('保存成功，只是模拟，实际未变更');
      this.modalRef.close(true);
      this.modalClose();
    });
  }

  onSubmit($event: any) {
    debugger;
    console.log($event.value);
  }

}
