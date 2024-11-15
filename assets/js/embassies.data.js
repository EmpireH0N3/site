(function(url) {
  const img = new Image();
  img.src = url;
  img.onload = () => {
    console.log('%c', [
      'font-size: 1px;',
      'line-height: ' + this.height + 'px;',
      'padding: ' + this.height * .5 + 'px ' + this.width * .5 + 'px;',
      'background-size: ' + this.width + 'px ' + this.height + 'px;',
      'background: url(' + url + ');'
    ].join(' '));
  };
})('https://h0n3.eu/assets/img/logo.png');

window.$H0N3 = window.$H0N3 || {};
$H0N3.embassies = {
  Chartres: {
    long: 48.450001,
    lat: 1.5,
    email: 'chartres@amb.h0n3.eu',
    rep: 'One Type II de France',
  },
};
