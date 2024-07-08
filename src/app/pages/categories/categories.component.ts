import { Component } from "@angular/core";
import { LoaderComponent } from "../../components/loader/loader.component";
import { ModalComponent } from "../../components/modal/modal.component";
import { CategoryListComponent } from "../../components/categories/category-list/categories-list.component";
import { CategoryFormComponent } from "../../components/categories/category-form/categories-form.component";
import { RoleCheckDirective } from "../../directives/role-check.directive";

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [
    CategoryListComponent,
    CategoryFormComponent,
    LoaderComponent,
    ModalComponent,
    RoleCheckDirective
  ],
  templateUrl: "./categories.component.html",
  styleUrl: "./categories.component.scss",
})
export class CategoriesComponent {}