import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValidService } from 'app/libs/meta-ui/service/validate.service';
import { NumberComSpec } from '../../../../util/spec/field/number.comspec';

@Component({
  selector: 'app-field-number-zorro',
  templateUrl: './field-number-zorro.component.html',
  styles: []
})
export class FieldNumberZorroComponent extends NumberComSpec implements OnInit {
  constructor(public validService: ValidService) { super(validService); }
  ngOnInit(): void { }
}
