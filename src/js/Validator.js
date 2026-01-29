export default class Validator {
  /**
   * Проверяет номер карты по алгоритму Луна.
   * @param {string} cardNumber Номер кредитной карты
   * @return {boolean} Результат проверки
   */
  static validate(cardNumber) {
    const ccnS = cardNumber.toString();
    if (ccnS.length == 0) {
      return false;
    }
    let sum = 0;
    const parity = ccnS.length % 2;
    for (let i = 0; i < ccnS.length; i += 1) {
      let digit = Number(ccnS[i]);
      if (i % 2 === parity) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    return Number(sum % 10) === 0;
  }
}
