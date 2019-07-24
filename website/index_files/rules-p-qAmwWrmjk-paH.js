/*
 Quantcast measurement tag
 Copyright (c) 2008-2019, Quantcast Corp.
*/
(function(b,f,e){try{__qc("defaults",b,{labels:"_fp.event.Default"})}catch(k){}var g=function(b){var a=e.createElement("a");a.href=b;return a},h=function(b,a,c){return b?"nc"===b?!a||!c||0>a.indexOf(c):"eq"===b?a===c:"sw"===b?0===a.indexOf(c):"ew"===b?(b=a.length-c.length,a=a.lastIndexOf(c,b),-1!==a&&a===b):"c"===b?0<=a.indexOf(c):!1:!1},d=function(a,b,c){var d;d=f.top===f.self?e.location.href:g(e.referrer).href;h(b,d,c)?a(d):a(!1)},c=function(a,b,c){var d;d=f.top===f.self?e.location.pathname:g(e.referrer).pathname;
h(b,d,c)?a(d):a(!1)},a=function(a){return"array"==={}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()?{labels:a.join(",")}:{labels:""+a}};__qc.apply(null,["rules",[b,null,[[a,"_fp.event.Personal Loans Debt Consolidation"]],[[d,"c","/loans/personal-loans/debt-consolidation"]]],[b,null,[[a,"_fp.event.Personal Loans Holiday"]],[[d,"c","/loans/personal-loans/go-on-a-holiday"]]],[b,null,[[a,"_fp.event.Personal Loans Health"]],[[d,"c","/loans/personal-loans/improve-my-health"]]],[b,null,[[a,"_fp.event.Personal Loans Reward"]],
[[d,"c","/loans/personal-loans/give-myself-a-reward"]]],[b,null,[[a,"_fp.event.Personal Loans Home Improvement"]],[[d,"c","/loans/personal-loans/improve-my-home"]]],[b,null,[[a,"_fp.event.Personal Loans Vehicle"]],[[c,"c","/loans/personal-loans/buy-a-new-car"]]],[b,null,[[a,"_fp.event.Mobile Banking"]],[[c,"eq","/digitalbanking/mobile-banking"]]],[b,null,[[a,"_fp.event.Find Your Health Cover"]],[[c,"eq","/lp/insurance/health-insurance/find-health-cover"]]],[b,null,[[a,"_fp.event.Tools and Services"]],
[[c,"c","/tools-and-services/"]]],[b,null,[[a,"_fp.event.Financial Planning"]],[[c,"c","/financial-planning"]]],[b,null,[[a,"_fp.event.Support"]],[[c,"c","/support"]]],[b,null,[[a,"_fp.event.Calculators"]],[[c,"c","/calculators"]]],[b,null,[[a,"_fp.event.Managing Your Accounts"]],[[c,"c","/managing-your-accounts"]]],[b,null,[[a,"_fp.event.Business Banking"]],[[c,"c","/business/"]]],[b,null,[[a,"_fp.event.Business Insurance"]],[[c,"ew","business-insurance"]]],[b,null,[[a,"_fp.event.CUA Everyday Account for Communities"]],
[[c,"c","/community-account"]]],[b,null,[[a,"_fp.event.CUA Everyday Business Account"]],[[c,"c","/everyday-business-account"]]],[b,null,[[a,"_fp.event.Vehicle and Equipment Finance"]],[[c,"c","/vehicle-And-equipment-finance"]]],[b,null,[[a,"_fp.event.Commercial Overdraft"]],[[c,"c","/commercial-overdraft"]]],[b,null,[[a,"_fp.event.Commercial Loan"]],[[c,"c","/commercial-loans"]]],[b,null,[[a,"_fp.event.CUA Community"]],[[c,"c","/cua-community"]]],[b,null,[[a,"_fp.event.CUA News"]],[[c,"c","cua-news"]]],
[b,null,[[a,"_fp.event.Corporate Governance"]],[[c,"c","corporate-governance"]]],[b,null,[[a,"_fp.event.Life at CUA"]],[[c,"c","life-at-cua"]]],[b,null,[[a,"_fp.event.About Us"]],[[c,"c","/about-us/"]]],[b,null,[[a,"_fp.event.The CUA Difference"]],[[c,"c","/cua-difference"]]],[b,null,[[a,"_fp.event.Foreign Drafts and Cheques"]],[[c,"c","/foreign-currency-draft-conversion"]]],[b,null,[[a,"_fp.event.International Services"]],[[c,"c","/international-services"]]],[b,null,[[a,"_fp.event.Foreign Cash"]],
[[c,"c","/foreign-currency"]]],[b,null,[[a,"_fp.event.Travel Card"]],[[c,"c","/travel-money"]]],[b,null,[[a,"_fp.event.Travel"]],[[c,"c","travel"]]],[b,null,[[a,"_fp.event.100 Bonus With Insurance"]],[[c,"eq","/lp/insurance/general-insurance"]]],[b,null,[[a,"_fp.event.Health Insurance Quote"]],[[c,"eq","/health/join"]]],[b,null,[[a,"_fp.event.Life Insurance"]],[[c,"c","/life-insurance"]]],[b,null,[[a,"_fp.event.Loan Repayments Insurance"]],[[c,"c","loan-repayment-insurance"]]],[b,null,[[a,"_fp.event.Home and Contents Insurance"]],
[[c,"c","/home-and-contents"]]],[b,null,[[a,"_fp.event.Motor Insurance"]],[[c,"c","/motor-insurance"]]],[b,null,[[a,"_fp.event.Travel Insurance"]],[[c,"c","/travel-insurance"]]],[b,null,[[a,"_fp.event.Insurance"]],[[c,"c","/insurance"]]],[b,null,[[a,"_fp.event.Health Insurance Member Portal"]],[[c,"c","/health-member-portal"]]],[b,null,[[a,"_fp.event.Health Insurance News and Media"]],[[c,"c","/news"]]],[b,null,[[a,"_fp.event.New to Health Insurance"]],[[c,"c","/new-to-health-insurance"]]],[b,null,
[[a,"_fp.event.Saving on Tax"]],[[c,"c","/save-on-tax"]]],[b,null,[[a,"_fp.event.Make a Claim"]],[[c,"c","/health-claim-app"]]],[b,null,[[a,"_fp.event.Switching to CUA Health"]],[[c,"c","/switching-health-providers"]]],[b,null,[[a,"_fp.event.Health Insurance FAQs"]],[[c,"eq","/health-insurance/faqs"]]],[b,null,[[a,"_fp.event.Extras Cover"]],[[c,"c","/extras-cover"]]],[b,null,[[a,"_fp.event.Hospital Cover"]],[[c,"c","/hospital-cover"]]],[b,null,[[a,"_fp.event.Get a Health Insurance Quote Now"]],[[c,
"c","/get-a-quote"]]],[b,null,[[a,"_fp.event.Health Insurance"]],[[c,"c","health-insurance"]]],[b,null,[[a,"_fp.event.What Is a Credit Report"]],[[c,"c","/comprehensive-credit-reporting"]]],[b,null,[[a,"_fp.event.What Will My Repayments Be"]],[[c,"c","/what-are-my-repayments"]]],[b,null,[[a,"_fp.event.Consolidate My Debt"]],[[c,"c","/debt-consolidation"]]],[b,null,[[a,"_fp.event.Fixed Rate Car Loan"]],[[c,"c","/car-loan"]]],[b,null,[[a,"_fp.event.Personal Loans Variable Rate"]],[[c,"c","/variable-rate"]]],
[b,null,[[a,"_fp.event.Personal Loans Fixed Rate"]],[[c,"c","/fixed-rate"]]],[b,null,[[a,"_fp.event.Personal Loans"]],[[c,"c","/personal-loans"]]],[b,null,[[a,"_fp.event.Compare All Home Loans"]],[[c,"c","compare"]]],[b,null,[[a,"_fp.event.Renovating"]],[[c,"c","renovating"]]],[b,null,[[a,"_fp.event.Loans"]],[[c,"c","loans"]]],[b,null,[[a,"_fp.event.Refinancing"]],[[c,"c","refinancing"]]],[b,null,[[a,"_fp.event.Buying and Investment Property"]],[[c,"c","/buying-an-investment-property"]]],[b,null,
[[a,"_fp.event.Buying Your First Home"]],[[c,"c","/buying-your-first-home"]]],[b,null,[[a,"_fp.event.Premium Fixed Rate"]],[[c,"c","/premium-fixed-rate2"]]],[b,null,[[a,"_fp.event.Fixed Rate"]],[[c,"c","/3-year-fixed-rate"]]],[b,null,[[a,"_fp.event.Accelerate Variable"]],[[c,"c","/accelerate-variable"]]],[b,null,[[a,"_fp.event.Balanced Variable"]],[[c,"c","/balanced-variable"]]],[b,null,[[a,"_fp.event.Home Loans"]],[[c,"c","home-loans"]]],[b,null,[[a,"_fp.event.Brisbane Heat Supporters Credit Card"]],
[[c,"eq","/brisbane-heat-credit-cards"]]],[b,null,[[a,"_fp.event.PayID and NPP"]],[[c,"eq","/digitalbanking/npp"]]],[b,null,[[a,"_fp.event.Receiving Money From Overseas"]],[[c,"c","/receive-money-from-overseas"]]],[b,null,[[a,"_fp.event.Sending Money Overseas"]],[[c,"c","/send-money-overseas"]]],[b,null,[[a,"_fp.event.eSaver Reward Bundle"]],[[c,"c","/esaver-bundle"]]],[b,null,[[a,"_fp.event.Savings Top-Up"]],[[c,"c","/savings-top-up"]]],[b,null,[[a,"_fp.event.Benefits"]],[[c,"c","benefits"]]],[b,
null,[[a,"_fp.event.Just In Case Overdraft"]],[[c,"c","just-in-case-overdraft"]]],[b,null,[[a,"_fp.event.Everyday Overdraft"]],[[c,"c","/everyday-overdraft"]]],[b,null,[[a,"_fp.event.Overdrafts"]],[[c,"c","/overdrafts"]]],[b,null,[[a,"_fp.event.Term Deposit"]],[[c,"c","/term-deposit"]]],[b,null,[[a,"_fp.event.eSaver Reward Account"]],[[c,"c","/esaver-reward"]]],[b,null,[[a,"_fp.event.Youth eSaver Account"]],[[c,"c","youth-esaver-account"]]],[b,null,[[a,"_fp.event.eSaver Boost Account"]],[[c,"c","esaver-boost-account"]]],
[b,null,[[a,"_fp.event.Savings and Term Deposits"]],[[c,"c","savings-and-term-deposits"]]],[b,null,[[a,"_fp.event.Low Rate Credit Card"]],[[c,"c","/cua-low-rate-credit-card"]]],[b,null,[[a,"_fp.event.Platinum Credit Card"]],[[c,"c","/cua-platinum-rewards-credit-card"]]],[b,null,[[a,"_fp.event.Everyday 55 Plus Account"]],[[c,"c","/cua-everyday-55-account"]]],[b,null,[[a,"_fp.event.Everyday Youth Account"]],[[c,"c","/cua-everyday-youth-account"]]],[b,null,[[a,"_fp.event.Everyday Account"]],[[c,"c",
"/cua-everyday-account"]]],[b,null,[[a,"_fp.event.Everyday Banking"]],[[c,"c","/everyday-banking"]]],[b,null,[[a,"_fp.event.Deposit Account Applications - All"]],[[d,"c","apply2.cua.com.au"],[d,"c","deposit-accounts"]]],[b,null,[[a,"_fp.event.Credit Cards"]],[[c,"c","/credit-cards"]]],[b,null,[[a,"_fp.event.Everyday Accounts"]],[[c,"c","/everyday-accounts"]]],[b,null,[[a,"_fp.event.Homepage"]],[[c,"eq","/"]]]])})("p-qAmwWrmjk-paH",window,document);