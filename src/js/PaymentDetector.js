export default class PaymentDetector {
  /**
   * Определяет платёжную систему по первому символу (BIN).
   * @param {string} cardNumber Номер кредитной карты
   * @return {string|null} Имя платёжной системы или null
   */
  static detect(cardNumber) {
    const firstSixDigits = cardNumber.substring(0, 6);

    if (/^4/.test(firstSixDigits)) return "Visa";
    if (/^5[1-5]/.test(firstSixDigits)) return "MasterCard";
    if (/^(34|37)/.test(firstSixDigits)) return "American Express";
    if (/^6011|^65|^64[4-9]/.test(firstSixDigits)) return "Discover";
    if (/^35/.test(firstSixDigits)) return "JCB";
    if (/^62/.test(firstSixDigits)) return "Union Pay";
    if (/^220[0-4]/.test(firstSixDigits)) return "Мир";

    return null;
  }
}
