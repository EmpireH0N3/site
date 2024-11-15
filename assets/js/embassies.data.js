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
    long: 48.443911792,
    lat: 1.4889035, 
  },
  Dráma: {
    long: 41.1500495,
    lat: 24.1467915,
  },
  Laâyoune: {
    long: 27.1418,
    lat: -13.18797,
  },
  Mons: {
    long: 50.452412336,
    lat: 3.971947526,
  },
  Palerme: {
    ambassador: 'Micorksen I de Sicile',
    long: 38.115664,
    lat: 13.3614707,
  },
  Oran: {
    long: 35.69906,
    lat: -0.63588,
  },
  Strasbourg: {
    long: 48.573340291,
    lat: 7.752005015,
  },
};

for (const embassy in $H0N3.embassies) {
  $H0N3.embassies[embassy].ambassador = $H0N3.embassies[embassy].ambassador || 'N/C pour le moment';
  $H0N3.embassies[embassy].email = `${embassy.replace(' ', '').toLowerCase()}@amb.h0n3.eu`;
}
