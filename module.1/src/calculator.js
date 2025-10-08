// Minimal, dependency-free calculator logic binding to DOM
(function () {
  const display = document.getElementById('display');
  const keysContainer = document.querySelector('.keys');

  let current = '0';
  let previous = null;
  let operator = null;
  let justEvaluated = false;

  function updateDisplay(value) {
    display.value = value;
  }

  function inputDigit(d) {
    if (justEvaluated) {
      current = d;
      justEvaluated = false;
      return updateDisplay(current);
    }
    if (current === '0') current = d;
    else current += d;
    updateDisplay(current);
  }

  function inputDot() {
    if (justEvaluated) {
      current = '0.';
      justEvaluated = false;
      return updateDisplay(current);
    }
    if (!current.includes('.')) {
      current += '.';
      updateDisplay(current);
    }
  }

  function clearAll() {
    current = '0';
    previous = null;
    operator = null;
    justEvaluated = false;
    updateDisplay(current);
  }

  function deleteOne() {
    if (justEvaluated) {
      clearAll();
      return;
    }
    if (current.length <= 1) current = '0';
    else current = current.slice(0, -1);
    updateDisplay(current);
  }

  function setOperator(op) {
    if (operator && !justEvaluated) {
      // chain operation
      evaluate();
    }
    previous = parseFloat(current);
    operator = op;
    justEvaluated = false;
    current = '0';
  }

  function evaluate() {
    if (operator === null || previous === null) return;
    const a = previous;
    const b = parseFloat(current);
    let result;
    switch (operator) {
      case '+':
        result = a + b; break;
      case '-':
        result = a - b; break;
      case '*':
        result = a * b; break;
      case '/':
        result = b === 0 ? 'Error' : a / b; break;
      case '%':
        result = a % b; break;
      default:
        return;
    }
    current = String(result);
    updateDisplay(current);
    operator = null;
    previous = null;
    justEvaluated = true;
  }

  keysContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    const value = btn.getAttribute('data-value');
    const action = btn.getAttribute('data-action');

    if (action === 'clear') return clearAll();
    if (action === 'delete') return deleteOne();
    if (action === 'equals') return evaluate();

    if (value === '.') return inputDot();
    if (['+', '-', '*', '/', '%'].includes(value)) return setOperator(value);
    inputDigit(value);
  });

  // keyboard support
  document.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9')) inputDigit(e.key);
    else if (e.key === '.') inputDot();
    else if (['+', '-', '*', '/','%'].includes(e.key)) setOperator(e.key);
    else if (e.key === 'Enter' || e.key === '=') evaluate();
    else if (e.key === 'Backspace') deleteOne();
    else if (e.key.toLowerCase() === 'c') clearAll();
  });
})();


