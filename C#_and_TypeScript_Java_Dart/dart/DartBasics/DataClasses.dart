import 'dart:convert';

class ProductSettings{
  String productDetails="";
  String productSalesDetails="";
  List<String> products_categories=[];
  Map<String,dynamic> products={};

  ProductSettings(this.productDetails,this.productSalesDetails,this.products_categories);
  
  ProductSettings.fromJson(Map<String, dynamic> json){
    print(json);
    this.productDetails=json["product_details"];
    this.productSalesDetails=json["product_sales_details"];
    this.products_categories=json["product_categories"];
    //this.products=this.productsMap(json["products"]);
  }
  Map<String,dynamic> productsMap(String json){
    return jsonDecode(json);
  }
}