import Validator from "./Validator";
import PaymentDetector from "./PaymentDetector";

export default class CreditCardWidget {
  constructor(id) {
    this.formContainer = document.getElementById(id);
    this.cardContainer = document.createElement("div");
    this.cardInput = document.createElement("input");
    this.validateBtn = document.createElement("button");
    this.resultSpan = document.createElement("span");

    this.initUI();
    this.bindEvents();
  }

  initUI() {
    this.cardContainer.className = "card-container";
    for (let i = 0; i < 6; i++) {
      const cell = document.createElement("div");
      cell.className = `cell c_${i}`;
      cell.dataset.index = i;
      this.cardContainer.append(cell);
      cell.classList.add("inactive");
    }

    this.formContainer.append(this.cardContainer);

    const label = document.createElement("label");
    label.setAttribute("for", "card-number-input");

    this.cardInput.id = "card-number-input";
    this.cardInput.type = "number";
    this.cardInput.placeholder = "Номер карты";

    this.validateBtn.textContent = "Проверить";
    this.validateBtn.id = "validate-button";

    this.resultSpan.textContent = "";
    this.resultSpan.id = "result-message";

    this.formContainer.append(label);
    this.formContainer.append(this.cardInput);
    this.formContainer.append(this.validateBtn);
    this.formContainer.append(this.resultSpan);
  }

  bindEvents() {
    this.validateBtn.addEventListener("click", async () => {
      this.resultSpan.textContent = "Проверяю...";
      await new Promise((resolve) => setTimeout(resolve, 500)); // Эмуляция задержки
      const cardNumber = this.cardInput.value.trim();
      if (Validator.validate(cardNumber)) {
        const system = PaymentDetector.detect(cardNumber);
        this.resultSpan.textContent = `Валидный номер карты (${system || "неопределённая система"})`;

        this.highlightCard(system);
      } else {
        this.resultSpan.textContent = "Номер карты недействителен!";
        this.cardInput.value = "";
      }
    });
  }

  highlightCard(system) {
    // Сбрасываем активность всех карт
    console.log(`Система ${system}`);
    const cards = this.cardContainer.children;
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("active");
      const hasClass = cards[i].classList.contains("inactive");
      if (!hasClass) {
        cards[i].classList.add("inactive");
      }
    }

    switch (system) {
      case "Visa":
        var my_card = this.cardContainer.children[3];
        this.Show(my_card);
        break;
      case "MasterCard":
        my_card = this.cardContainer.children[0];
        this.Show(my_card);
        break;
      case "Мир":
        my_card = this.cardContainer.children[1];
        this.Show(my_card);
        break;
      case "American Express":
        my_card = this.cardContainer.children[5];
        this.Show(my_card);
        break;
      case "Discover":
        my_card = this.cardContainer.children[4];
        this.Show(my_card);
        break;
      case "JCB":
        my_card = this.cardContainer.children[2];
        this.Show(my_card);
        break;
      default:
        break;
    }
  }

  Show(my_card) {
    if (my_card) {
      my_card.classList.add("active");
      my_card.classList.remove("inactive");
    }
  }
}
