import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IRoleType } from '../interfaces';

@Directive({
  selector: '[appRoleCheck]',
  standalone: true
})
export class RoleCheckDirective {
  private desiredRole!: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { this.desiredRole = this.authService.hasRole(IRoleType.superAdmin);
    if (this.desiredRole){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
   }

  /*@Input()
  set sessionHasRole(role:string) {
    this.desiredRole = role;
    this.setView();
  }

  private setView() {
    if (this.authService.hasRole(IRoleType.superAdmin)){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }*/

}
