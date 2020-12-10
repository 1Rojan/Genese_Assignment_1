const calculator = document.querySelector('.calculator');
  const display = document.querySelector('.calculator_display');
  const keys = document.querySelector('.calculator_keys');

  function calculate(n1, op, n2){
    var result = '';
    if(op === 'add'){
      result = parseFloat(n1)+parseFloat(n2);
      display.textContent = result ;
    }

    if(op == 'subtract'){
      result = parseFloat(n1)-parseFloat(n2);
      display.textContent = result ;
    }
    if(op == 'divide'){
      result = parseFloat(n1)/parseFloat(n2);
      display.textContent = result ;
    }
    if(op == 'multiply'){
      result = parseFloat(n1)*parseFloat(n2);
      display.textContent = result ;
    }
    
  }

  keys.addEventListener('click',function(e){
    if(e.target.matches('button')){
      const key = e.target ;
      const action = key.dataset.action ;
      const displayedNum = display.textContent ;
      const previousKeyType = calculator.dataset.previousKeyType;

      if(!action){
        if(display.textContent === '0' || previousKeyType === 'operator'){
          display.textContent = key.textContent ;
        }else{
          display.textContent = display.textContent + key.textContent ;
        }
        calculator.dataset.previousKeyType = 'number'
      }

      if(action === 'add' ||
        action === 'subtract' ||
        action === 'divide' ||
        action === 'multiply'
        ){
          calculator.dataset.firstValue = displayedNum ;
          calculator.dataset.previousKeyType = 'operator' ;
          calculator.dataset.operator = action ;
      }
     
      if(action === 'calculate'){
        const num1 = calculator.dataset.firstValue;
        const operation = calculator.dataset.operator;
        const num2 = display.textContent ;
        calculate(num1, operation, num2);
        calculator.dataset.previousKeyType = 'calculate';
      }
      if(action === 'clear'){
        display.textContent = '';
        calculator.dataset.previousKeyType = 'clear'
      }

      if(action === 'decimal'){
        console.log('decimal');
        if (previousKeyType === 'operator'){
          display.textContent = '0.'
        }else if(!display.textContent.includes('.')){
          display.textContent += '.';
        }
        calculator.dataset.previousKeyType='decimal';
      }

    }
  })