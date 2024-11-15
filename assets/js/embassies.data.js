console.groupCollapsed('%cEmpire H0N3', 'color:#FFF;font-size:24px;background:#032A61');
console.log('Ce site utilise des ressources mises gratuitement à disposition par les gestionnaires Infratique.');
if (!window.location.hostname.endsWith('.h0n3.eu')) {
  console.log('⚠️ Ce site n\'est probablement pas un service impérial officiel.\nSoyez prudents lors de la recherche d\'informations à l\'aide de ce site.');
}

console.groupEnd();

window.$H0N3 = window.$H0N3 || {};
$H0N3.embassies = {
  Chartres: {
    ambassador: 'One Type II de France',
    long: 48.450001,
    lat: 1.5,
  },
};

for (const embassy in $H0N3.embassies) {
  $H0N3.embassies[embassy].ambassador = $H0N3.embassies[embassy].ambassador || 'N/C pour le moment';
  $H0N3.embassies[embassy].email = `${embassy.replace(' ', '').toLowerCase()}@amb.h0n3.eu`;
}
