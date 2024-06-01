import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private $gaService: GoogleAnalyticsService){}
  purchase(){

    this.$gaService.gtag("event", "purchase", {
      transaction_id: "T_1234556",
      // Sum of (price * quantity) for all items.
      value: 72.05,
      tax: 3.60,
      shipping: 5.99,
      currency: "USD",
      coupon: "SUMMER_SALE",
      items: [
       {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        discount: 2.22,
        index: 0,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "green",
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
        price: 10.01,
        quantity: 3
      },
      {
        item_id: "SKU_12346",
        item_name: "Google Grey Women's Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        discount: 3.33,
        index: 1,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "gray",
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
        price: 21.01,
        promotion_id: "P_12345",
        promotion_name: "Summer Sale",
        quantity: 2
      }]
  });
  }
}
