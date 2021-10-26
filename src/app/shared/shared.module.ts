import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule //se importa el routermoudle para porder usar los routerlinks
    
  ],
  exports: [
    SidebarComponent
  ],
})
export class SharedModule { }
