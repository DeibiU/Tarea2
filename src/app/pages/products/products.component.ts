import { Component } from "@angular/core";
import { ProductListComponent } from "../../components/products/product-list/product-list.component";
import { ProductFormComponent } from "../../components/products/product-form/product-form.component";
import { LoaderComponent } from "../../components/loader/loader.component";
import { ModalComponent } from "../../components/modal/modal.component";
import { RoleCheckDirective } from "../../directives/role-check.directive";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [
    ProductFormComponent,
    ProductListComponent,
    LoaderComponent,
    ModalComponent,
    RoleCheckDirective
  ],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss",
})
export class ProductsComponent {}