import Validator from "../js/Validator";
import PaymentDetector from "../js/PaymentDetector";

describe("Credit Card Validator form", () => {
  test("Валидный номер", () => {
    const result = Validator.validate("4868766057528936");
    expect(result).toBeTruthy();
  });

  test("Не валидный номер", () => {
    const result = Validator.validate("4528936");
    expect(result).toBeFalsy();
  });

  test("Без номера", () => {
    const result = Validator.validate("");
    expect(result).toBeFalsy();
  });

  test("Это Visa", () => {
    const cardNumber = "4539177284155965";
    const result = PaymentDetector.detect(cardNumber);
    expect(result).toBe("Visa");
  });

  test("не определил карту", () => {
    const cardNumber = "5965";
    const result = PaymentDetector.detect(cardNumber);
    expect(result).toBe(null);
  });
});
