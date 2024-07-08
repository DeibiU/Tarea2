import { ProductsService } from "../../../services/products.service";
import { Component, Input, inject } from "@angular/core";
import {
  IFeedBackMessage,
  IProduct,
  IFeedbackStatus,
} from "../../../interfaces";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-product-form",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./product-form.component.html",
  styleUrl: "./product-form.component.scss",
})
export class ProductFormComponent {
  @Input() title!: string;
  @Input() product: IProduct = {
    description: "",
    price: 0,
    stock: 0,
    name: "",
  };
  @Input() action: string = "add";
  service = inject(ProductsService);
  feedbackMessage: IFeedBackMessage = {
    type: IFeedbackStatus.default,
    message: "",
  };

  handleAction(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach((controlName) => {
        form.controls[controlName].markAsTouched();
      });
      return;
    } else {
      this.service[
        this.action == "add" ? "saveProductSignal" : "updateProductSignal"
      ](this.product).subscribe({
        next: () => {
          this.feedbackMessage.type = IFeedbackStatus.success;
          this.feedbackMessage.message = `Product successfully ${
            this.action == "add" ? "added" : "updated"
          }`;
        },
        error: (error: any) => {
          this.feedbackMessage.type = IFeedbackStatus.error;
          this.feedbackMessage.message = error.message;
        },
      });
    }
  }
}