_satellite.pushBlockingScript(function(event, target, $variables){
  var product_cat = digitalData.page.productInfo.productCategory;

var aff = 'none';

switch (product_cat){
    case "Credit Cards":
        aff = 'creditcard';
        break;

    case "Personal Loans":
        aff = 'personalloan';
        break;

    case "Transaction Accounts","Savings Accounts":
        aff = 'transactionalbanking';
        break;

    case "Home Loans":
        aff = 'homeloan';
        break;
}

if( aff != "none"){
    var d = document.createElement('div');
    d.id = "cat-aff";
    document.body.appendChild(d);
    mboxDefine("cat-aff","cat-aff");
    mboxUpdate("cat-aff","user.categoryId="+aff);
}

console.log('%c' + ' Acc-BG: Entered categaroy affinity > ' + aff + ' ', "background: green; color: white; font-size: small");

});
