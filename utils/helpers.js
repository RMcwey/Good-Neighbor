module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: (genreCode) => {
    const passedGenreCode = genreCode;

    switch (passedGenreCode) {
      case 1:
        // console.log('Genre Emoji is DRAMA (faces).')
        return `<span for="img" aria-label="drama faces">🎭</span>`;
      case 2:
        // console.log('Genre Emoji is Comedy (laughing).')
        return `<span for="img" aria-label="laughing tears">😂</span>`;
      case 3:
        // console.log('Genre Emoji is ACTION (faces).')
        return `<span for="img" aria-label="bomb">💣</span>`;
      case 4:
        // console.log('Genre Emoji is FANTASY (unicorn).')
        return `<span for="img" aria-label="unicorn">🦄</span>`;
      case 5:
        // console.log('Genre Emoji is HORROR (ghost).')
        return `<span for="img" aria-label="ghost">👻</span>`;
      case 6:
        // console.log('Genre Emoji is ROMANCE (hearteyes).')
        return `<span for="img" aria-label="heart eyes">😍</span>`;
      case 7:
        // console.log('Genre Emoji is WESTERN (cactusscene).')
        return `<span for="img" aria-label="cactus western">🏜️</span>`;
      case 8:
        // console.log('Genre Emoji is THRILLER (scaredface).')
        return `<span for="img" aria-label="scared face">😱</span>`;
      case 9:
        // console.log('Genre Emoji is OTHER (hmmface).')
        return `<span for="img" aria-label="hmm face">🤔</span>`;
    }
  },

  format_mobile_number: (mobile) => {
    const phoneNumberString = mobile;
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  },

  ifCond: (v1, operator, v2, options) => {
    switch (operator) {
      case '==':
          return (v1 == v2) ? options.fn(this) : options.inverse(this);
      case '===':
          return (v1 === v2) ? options.fn(this) : options.inverse(this);
      case '!=':
          return (v1 != v2) ? options.fn(this) : options.inverse(this);
      case '!==':
          return (v1 !== v2) ? options.fn(this) : options.inverse(this);
      case '<':
          return (v1 < v2) ? options.fn(this) : options.inverse(this);
      case '<=':
          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
      case '>':
          return (v1 > v2) ? options.fn(this) : options.inverse(this);
      case '>=':
          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
      case '&&':
          return (v1 && v2) ? options.fn(this) : options.inverse(this);
      case '||':
          return (v1 || v2) ? options.fn(this) : options.inverse(this);
      default:
          return options.inverse(this);
  }
  },

  ifCondTwo: (v1, v2, v3, options) => {
    return (v1 && v2 !== v3) ? options.fn(this) : options.inverse(this);
  
  },

  ifCondThree: (v1, v2, v3, options) => {
    return (!v1 && v2 === v3) ? options.fn(this) : options.inverse(this);
  }
};
