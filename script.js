const SidePanel = () => {
  const transactions = [
  { name: 'Bitcoin', icon: 'fab fa-btc', abbr: 'BTC', price: '1,849.32', date: '19 Aug 2021' },
  { name: 'Ethereum', icon: 'fab fa-ethereum', abbr: 'ETH', price: 143.12, date: '19 Aug 2021' },
  { name: 'Bitcoin', icon: 'fab fa-btc', abbr: 'BTC', price: 43.19, date: '17 Aug 2021' }];

  const transactions_list = transactions.map((item, key) => {
    return /*#__PURE__*/(
      React.createElement("div", { className: "transaction-item flex-row text-medium" }, /*#__PURE__*/React.createElement("i", { className: item.icon }), /*#__PURE__*/
      React.createElement("div", { className: "flex-row flex-apart" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("span", { className: "text-small" }), item.name, /*#__PURE__*/React.createElement("div", { className: "text-small" }, item.abbr)), /*#__PURE__*/

      React.createElement("div", { className: "transaction-price" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/React.createElement("span", { className: "text-small" }, "\xA3"), item.price), /*#__PURE__*/React.createElement("div", { className: "text-small" }, item.date)))));




  });
  return /*#__PURE__*/(
    React.createElement("div", { id: "app-sidepanel" }, /*#__PURE__*/
    React.createElement("div", { className: "flex-row flex-apart" }, /*#__PURE__*/
    React.createElement("i", { className: "fa fa-bell header-icon" }), /*#__PURE__*/
    React.createElement("i", { className: "fa fa-user header-icon" })), /*#__PURE__*/

    React.createElement("h3", { className: "text-medium" }, "Your Cards"), /*#__PURE__*/


    React.createElement("img", { src: "https://i.pinimg.com/originals/f0/ae/1c/f0ae1cc9cc1a8fb481aba314352a04dd.png" }), /*#__PURE__*/
    React.createElement("div", { className: "flex-center flex-row" }, /*#__PURE__*/
    React.createElement("span", { className: "dot" }), /*#__PURE__*/
    React.createElement("span", { className: "dot active" }), /*#__PURE__*/
    React.createElement("span", { className: "dot" })), /*#__PURE__*/

    React.createElement("h3", { className: "text-medium" }, "Recent Transations"),


    transactions_list, /*#__PURE__*/
    React.createElement("div", { id: "upgrade-area", className: "flex-center flex-column text-small" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-shield-alt" }), /*#__PURE__*/
    React.createElement("span", { className: "flex-center" }, "Be more secure with pro features"), /*#__PURE__*/
    React.createElement("button", { className: "text-small" }, " Upgrade Now! "))));



};
const Dashboard = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "flex-column", id: "app-dashboard" }, /*#__PURE__*/
    React.createElement("div", { className: "flex-row flex-apart", id: "dashboard-header" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, "Dashboard"), /*#__PURE__*/
    React.createElement("h2", null, "16:20 PM * 02 Aug 2021")), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("input", { placeholder: "Search..", id: "app-search" }), /*#__PURE__*/
    React.createElement("i", { className: "fa fa-search" }))), /*#__PURE__*/


    React.createElement("div", { className: "flex-apart flex-column", id: "dashboard-charts" }, /*#__PURE__*/
    React.createElement("div", { className: "flex-row dashboard-row" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-container" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-item" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-container-logo" }, /*#__PURE__*/React.createElement("img", { src: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=013" })), /*#__PURE__*/
    React.createElement("div", { className: "flex-row flex-apart" }, /*#__PURE__*/
    React.createElement("div", { className: "text-small" }, "BTC ", /*#__PURE__*/
    React.createElement("i", { style: { 'margin': '0 5px' }, className: "fas fa-arrows-alt-h" }), " GBP"), /*#__PURE__*/

    React.createElement("div", { className: "text-small success" }, "5.23%%")), /*#__PURE__*/

    React.createElement("div", { className: "text-large" }, /*#__PURE__*/React.createElement("span", { className: "text-small" }, "\xA3 "), "28,642.33"), /*#__PURE__*/
    React.createElement("div", { className: "chart-container" }, /*#__PURE__*/
    React.createElement("table", { class: "charts-css line app-chart", id: "chart1" }, /*#__PURE__*/
    React.createElement("tbody", null, /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.0, "--size": 0.4 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.4, "--size": 0.2 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.2, "--size": 0.6 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.6, "--size": 0.8 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.8, "--size": 0.8 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.8, "--size": 0.6 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.6, "--size": 1.0 } })))), /*#__PURE__*/


    React.createElement("div", { className: "chart-overlay" })))), /*#__PURE__*/



    React.createElement("div", { className: "dashboard-container" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-item" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-container-logo" }, /*#__PURE__*/React.createElement("img", { src: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=013" })), /*#__PURE__*/
    React.createElement("div", { className: "flex-row flex-apart" }, /*#__PURE__*/
    React.createElement("div", { className: "text-small" }, "LTC ", /*#__PURE__*/
    React.createElement("i", { style: { 'margin': '0 5px' }, className: "fas fa-arrows-alt-h" }), " GBP"), /*#__PURE__*/

    React.createElement("div", { className: "text-small alert" }, "2.83%%")), /*#__PURE__*/

    React.createElement("div", { className: "text-large" }, /*#__PURE__*/React.createElement("span", { className: "text-small" }, "\xA3 "), "103.26"), /*#__PURE__*/
    React.createElement("div", { className: "chart-container" }, /*#__PURE__*/
    React.createElement("table", { class: "charts-css line app-chart", id: "chart2" }, /*#__PURE__*/
    React.createElement("tbody", null, /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.0, "--size": 0.0 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.0, "--size": 0.5 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.5, "--size": 0.3 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.3, "--size": 0.2 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.2, "--size": 0.8 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.8, "--size": 0.6 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.6, "--size": 0.5 } })))), /*#__PURE__*/


    React.createElement("div", { className: "chart-overlay" })))), /*#__PURE__*/



    React.createElement("div", { className: "dashboard-container" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-item" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-container-logo" }, /*#__PURE__*/React.createElement("img", { src: "https://cryptologos.cc/logos/amp-amp-logo.png?v=013" })), /*#__PURE__*/
    React.createElement("div", { className: "flex-row flex-apart" }, /*#__PURE__*/
    React.createElement("div", { className: "text-small" }, "AMP ", /*#__PURE__*/
    React.createElement("i", { style: { 'margin': '0 5px' }, className: "fas fa-arrows-alt-h" }), " GBP"), /*#__PURE__*/

    React.createElement("div", { className: "text-small success" }, "11.13%%")), /*#__PURE__*/

    React.createElement("div", { className: "text-large" }, /*#__PURE__*/React.createElement("span", { className: "text-small" }, "\xA3 "), "259.42"), /*#__PURE__*/
    React.createElement("div", { className: "chart-container" }, /*#__PURE__*/
    React.createElement("table", { class: "charts-css line app-chart", id: "chart3" }, /*#__PURE__*/
    React.createElement("tbody", null, /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.0, "--size": 0.4 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.4, "--size": 0.2 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.2, "--size": 0.4 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.4, "--size": 0.4 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.4, "--size": 0.7 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.7, "--size": 0.8 } })), /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", { style: { "--start": 0.8, "--size": 1.0 } })))), /*#__PURE__*/


    React.createElement("div", { className: "chart-overlay" }))))), /*#__PURE__*/




    React.createElement("div", { className: "flex-row dashboard-row-large" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-container dashboard-container-large" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-item flex-column" }, /*#__PURE__*/
    React.createElement("div", { className: "chart-header flex-row flex-apart" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-medium" }, "Market Overview"), /*#__PURE__*/
    React.createElement("div", { className: "text-small dropdown" }, "Yearly ", /*#__PURE__*/
    React.createElement("i", { className: "fa fa-chevron-down" }))), /*#__PURE__*/


    React.createElement("table", { id: "chart4", className: "charts-css line multiple hide-data show-labels" }, /*#__PURE__*/React.createElement("caption", null, " Line Example #16 "), " ", /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", { scope: "col" }, " Year "), " ", /*#__PURE__*/React.createElement("th", { scope: "col" }, " Progress 1 "), " ", /*#__PURE__*/React.createElement("th", { scope: "col" }, " Progress 2 "), " ", /*#__PURE__*/React.createElement("th", { scope: "col" }, " Progress 3 "))), " ", /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", { scope: "row", className: "text-small" }, " 2000 "), " ", /*#__PURE__*/React.createElement("td", { style: { "--start": 0.1, "--size": 0.5 } }, /*#__PURE__*/React.createElement("span", { className: "data" }, " 50 ")), " ", /*#__PURE__*/React.createElement("td", { style: { "--start": 0, "--size": 0.2 } }, /*#__PURE__*/React.createElement("span", { className: "data" }, " 20 ")), " ", /*#__PURE__*/React.createElement("td", { style: { "--start": 0.2, "--size": 0.4 } }, /*#__PURE__*/React.createElement("span", { className: "data" }, " 40 "))), " ", /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", { scope: "row", className: "text-small" }, " 2010 "), " ", /*#__PURE__*/React.createElement("td", { style: { "--start": 0.5, "--size": 0.8 } }, /*#__PURE__*/React.createElement("span", { className: "data" }, " 80 ")), " ", /*#__PURE__*/React.createElement("td", { style: { "--start": 0.2, "--size": 0.5 } }, /*#__PURE__*/React.createElement("span", { className: "data" }, " 50 ")), " ", /*#__PURE__*/React.createElement("td", { style: { "--start": 0.4, "--size": 0.1 } }, /*#__PURE__*/React.createElement("span", { className: "data" }, " 10 "))), " ", /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", { scope: "row", className: "text-small" }, " 2020 "), " ", /*#__PURE__*/React.createElement("td", { style: { "--start": 0.8, "--size": 0.4 } }, /*#__PURE__*/React.createElement("span", { className: "data" }, " 40 ")), " ", /*#__PURE__*/React.createElement("td", { style: { "--start": 0.5, "--size": 0.3 } }, /*#__PURE__*/React.createElement("span", { className: "data" }, " 30 ")), " ", /*#__PURE__*/React.createElement("td", { style: { "--start": 0.1, "--size": 0.2 } }, /*#__PURE__*/React.createElement("span", { className: "data" }, " 20 ")))), /*#__PURE__*/React.createElement("div", { className: "chart-overlay" })), /*#__PURE__*/
    React.createElement("div", { className: "flex-center flex-row text-medium" }, /*#__PURE__*/
    React.createElement("div", { className: "flex-row" }, /*#__PURE__*/
    React.createElement("span", { className: "chart-legend-circle", style: { "background": "#f79319" } }), " BTC"), /*#__PURE__*/

    React.createElement("div", { className: "flex-row" }, /*#__PURE__*/
    React.createElement("span", { className: "chart-legend-circle", style: { "background": "#345d9d" } }), " LTC"), /*#__PURE__*/

    React.createElement("div", { className: "flex-row" }, /*#__PURE__*/
    React.createElement("span", { className: "chart-legend-circle", style: { "background": "#d9327b" } }), " AMP")))), /*#__PURE__*/




    React.createElement("div", { className: "flex-column dashboard-column" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-container" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-item" }, /*#__PURE__*/
    React.createElement("div", { className: "chart-header flex-row flex-apart" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-medium" }, "Profit")), /*#__PURE__*/

    React.createElement("div", { className: "flex-column" }, /*#__PURE__*/
    React.createElement("div", { className: "profit-item flex-row text-medium" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-arrow-up success" }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", { className: "text-small" }, "\xA3"), "6,969.45", /*#__PURE__*/React.createElement("div", { className: "text-small" }, "Income"))), /*#__PURE__*/
    React.createElement("div", { className: "profit-item flex-row text-medium" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-arrow-down alert" }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", { className: "text-small" }, "\xA3"), "420.12", /*#__PURE__*/React.createElement("div", { className: "text-small" }, "Expenses")))))), /*#__PURE__*/



    React.createElement("div", { className: "dashboard-container" }, /*#__PURE__*/
    React.createElement("div", { className: "dashboard-item", id: "transfer-now" }, /*#__PURE__*/
    React.createElement("div", { className: "chart-header flex-row flex-apart" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-medium" }, "Quick Transfer")), /*#__PURE__*/

    React.createElement("div", { className: "flex-row flex-apart" }, /*#__PURE__*/React.createElement("input", { placeholder: "To.." })), /*#__PURE__*/
    React.createElement("div", { className: "flex-row flex-apart" }, /*#__PURE__*/React.createElement("input", { placeholder: "Amount.." })), /*#__PURE__*/
    React.createElement("button", { className: "text-medium" }, " Transfer Now "))))))));







};
const Nav = () => {
  const nav_items = [
  { name: 'Home', icon: 'fa fa fa-home', active: true },
  { name: 'Reports', icon: 'fa fa-chart-pie' },
  { name: 'Statistics', icon: 'fa fa-chart-bar' },
  { name: 'Trade', icon: 'fas fa-coins' },
  { name: 'Wallet', icon: 'fa fa-wallet' },
  { name: 'Settings', icon: 'fa fa-cog' }];

  const nav = nav_items.map((item, key) => {
    return /*#__PURE__*/(
      React.createElement("div", { key: key, className: 'nav-item flex-center ' + (item.active ? 'active' : '') }, /*#__PURE__*/
      React.createElement("i", { class: item.icon })));


  });
  return /*#__PURE__*/(
    React.createElement("div", { id: "app-nav" }, /*#__PURE__*/
    React.createElement("div", { className: "flex-center" }, /*#__PURE__*/
    React.createElement("img", { id: "logo", src: "https://image.flaticon.com/icons/png/512/187/187902.png" })), /*#__PURE__*/

    React.createElement("div", null,
    nav)));



};

const App = () => {

  return /*#__PURE__*/(
    React.createElement("div", { className: "app-container flex-container" }, /*#__PURE__*/
    React.createElement(Nav, null), /*#__PURE__*/
    React.createElement(Dashboard, null), /*#__PURE__*/
    React.createElement(SidePanel, null)));


};

ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('app'));