import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dynamic-host]',
})
export class DynamicDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}



/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/