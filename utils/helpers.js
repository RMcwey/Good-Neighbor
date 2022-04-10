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
      return `<span for="img" aria-label="stareyes">🤩</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="smileyface">😁</span>`;
    } else {
      return `<span for="img" aria-label="sillyface">😝</span>`;
    }
  },
};
