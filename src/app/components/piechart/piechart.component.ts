import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/product/product.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
  providers: [ProductService]
})
export class PiechartComponent implements OnInit {
  public pieChartLabels: any[] = [];
  public pieChartData = [];
  public pieChartType = 'pie';

  constructor(private _productService: ProductService) { 
    this._productService.getCategories().subscribe( data => { 
      this.pieChartLabels = data['msg'];
      
      this.pieChartLabels.forEach(label => { 
        this._productService.getProductsByCategoryPie(label).subscribe(data => {debugger
          console.log(data['msg'].length)
          this.pieChartData.push(data['msg'].length);
        });
      });
    });
  }
  
  ngOnInit() {
 
  }

}
