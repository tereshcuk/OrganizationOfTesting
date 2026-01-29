import CreditCardWidget from "./CreditCardWidget";

document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.createElement("div");
  formContainer.id = "credit-card-widget";

  const body = document.body;
  body.append(formContainer);

  new CreditCardWidget(formContainer.id);
});
