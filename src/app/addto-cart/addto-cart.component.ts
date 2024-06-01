import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-addto-cart',
  standalone: true,
  imports: [],
  templateUrl: './addto-cart.component.html',
  styleUrl: './addto-cart.component.scss'
})

export class AddtoCartComponent {
  constructor(private $gaService: GoogleAnalyticsService){}

  submit(){
    this.$gaService.gtag("event", "add_to_cart", {
      currency: "USD",
      value: 30.03,
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
        }
      ]
    })


}


  

}
