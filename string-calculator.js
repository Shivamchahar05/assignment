class StringCalculator {
    add(numbers) {
      if (numbers === '') {
        return 0;
      }
  
      if (numbers.startsWith('//')) {
        const delimiterIndex = numbers.indexOf('\n');
        const delimiter = numbers.substring(2, delimiterIndex);
        numbers = numbers.substring(delimiterIndex + 1);
        numbers = numbers.replace(new RegExp(`\\${delimiter}`, 'g'), ',');
      } else {
        numbers = numbers.replace(/\n/g, ',');
      }
  
      const parts = numbers.split(',');
      let sum = 0;
      const negatives = [];
  
      for (const part of parts) {
        if (part) {
          const number = parseInt(part, 10);
          if (number < 0) {
            negatives.push(number);
          } else {
            sum += number;
          }
        }
      }
  
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
      }
  
      return sum;
    }
  }
  
  module.exports = StringCalculator;
  