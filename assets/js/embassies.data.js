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
    long: 1.4889035,
    lat: 48.443911792,
  },
  Dráma: {
    long: 24.1467915,
    lat: 41.1500495,
  },
  Laâyoune: {
    long: -13.18797,
    lat: 27.1418,
  },
  Mons: {
    long: 3.971947526,
    lat: 50.452412336,
  },
  Palerme: {
    ambassador: 'Micorksen I de Sicile',
    long: 13.3614707,
    lat: 38.115664,
  },
  Oran: {
    long: -0.63588,
    lat: 35.69906,
  },
  Strasbourg: {
    long: 7.752005015,
    lat: 48.573340291,
  },
};

for (const embassy in $H0N3.embassies) {
  $H0N3.embassies[embassy].ambassador = $H0N3.embassies[embassy].ambassador || 'N/C pour le moment';
  $H0N3.embassies[embassy].email = `${embassy.replace(' ', '').toLowerCase()}@amb.h0n3.eu`;
}
