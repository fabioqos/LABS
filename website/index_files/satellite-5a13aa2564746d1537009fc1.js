_satellite.pushAsyncScript(function(event, target, $variables){
  
BOQ.analytics.target({
  selector: ".logon-menu a, .subnav-item-title.nav-lvl1.login, #nav-main-logon li a",
  params: {
    event: 'Login',
    category: 'Login',
    labels: {
      userType: "Existing Customer"
    }
  }
})



});
