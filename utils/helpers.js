module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

// THESE WILL BE RE-WRITTEN TO DISPLAY A SPECIFIC EMOJI WITH THE MEDIA TYPE


    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="smiley face">😁</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="party hat">🥳</span>`;
    } else {
      return `<span for="img" aria-label="star eyes">🤩</span>`;
    }
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
  
  }
};
