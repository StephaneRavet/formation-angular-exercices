import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UsersComponent],
})
export class UsersModule {
}
