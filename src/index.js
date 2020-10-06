module.exports = function toReadable (number) {
    let mapNineteen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
                       'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                       'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let mapNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if ( number === 0 ) return 'zero';
  else if ( number <= 19 ) return mapNineteen[number - 1];
  else if ( number <= 99 ) return `${mapNinety[Math.floor(number / 10) - 2]} ${(number % 10 !== 0) ? toReadable(number % 10): ''}`.trim();
  else if ( number <= 999) return `${toReadable(Math.floor(number / 100))} hundred ${(number % 100 !== 0) ? toReadable(number % 100): ''}`.trim();
}
