function updateCountry(band) {
  band.country = 'Canada';
}

function removeDotsFromBandName(band) {
  band.name = band.name.replaceAll('.', '');
}

function capitaliseBandName(band) {
  let words = band.name.split(' ');
  words = words.map(word => capitalise(word));
  band.name = words.join(' ');
}

function capitalise(word) {
  let chars = word.split('');
  chars[0] = chars[0].toUpperCase();
  return chars.join('');
}

function processBands(bands) {
  return bands.map(band => {
    updateCountry(band);
    removeDotsFromBandName(band);
    capitaliseBandName(band);
    return band;
  });
}

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]