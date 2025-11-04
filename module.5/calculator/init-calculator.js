export function initCalculator(Calculator, rootDocument = document) {
  const display = rootDocument.getElementById("display");
  const keysContainer = rootDocument.querySelector(".keys");
  if (!display || !keysContainer) return null;

  const calc = new Calculator();

  function render() {
    display.value = calc.getDisplay();
  }

  keysContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const value = btn.getAttribute("data-value");
    const action = btn.getAttribute("data-action");

    if (action === "clear") {
      calc.clearAll();
      return render();
    }
    if (action === "delete") {
      calc.deleteOne();
      return render();
    }
    if (action === "equals") {
      calc.evaluate();
      return render();
    }

    if (value === ".") {
      calc.inputDot();
      return render();
    }
    if (["+", "-", "*", "/", "%"].includes(value)) {
      calc.setOperator(value);
      return render();
    }
    calc.inputDigit(value);
    render();
  });

  function onKeydown(e) {
    if (e.key >= "0" && e.key <= "9") calc.inputDigit(e.key);
    else if (e.key === ".") calc.inputDot();
    else if (["+", "-", "*", "/", "%"].includes(e.key)) calc.setOperator(e.key);
    else if (e.key === "Enter" || e.key === "=") calc.evaluate();
    else if (e.key === "Backspace") calc.deleteOne();
    else if (e.key.toLowerCase() === "c") calc.clearAll();
    else return;
    render();
  }

  rootDocument.addEventListener("keydown", onKeydown);

  render();

  return { calc };
}
