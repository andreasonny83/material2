/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {MatChipList} from './chip-list';
import {MatBasicChip, MatChip, MatChipRemove} from './chip';
import {MatChipInput} from './chip-input';


@NgModule({
  imports: [],
  exports: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipRemove, MatBasicChip],
  declarations: [MatChipList, MatChip, MatChipInput, MatChipRemove,  MatChipRemove, MatBasicChip]
})
export class MatChipsModule {}
