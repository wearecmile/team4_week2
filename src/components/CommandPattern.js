function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}
function mod(x, y) {
  return x % y;
}
function set(x, y) {
  return y;
}

var Command = function (execute, value) {
  this.execute = execute;
  this.value = value;
};

var AddCommand = function (value) {
  return new Command(add, value);
};

var SubCommand = function (value) {
  return new Command(sub, value);
};

var MulCommand = function (value) {
  return new Command(mul, value);
};

var DivCommand = function (value) {
  return new Command(div, value);
};
var ModCommand = function (value) {
  return new Command(mod, value);
};
var SetCommand = function (value) {
  return new Command(set, value);
};

var Calculator = function () {
  var current = 0;
  var commands = [];

  function action(command) {
    var name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    execute: function (command) {
      current = command.execute(current, command.value);
      commands.push(command);
      console.log(action(command) + ": " + command.value);
    },

    getCurrentValue: function () {
      return current;
    },
    setCurrentValue: function (value) {
      return (current = value);
    },
  };
};

var calculator = new Calculator();

export function run(type, value) {
  switch (type) {
    case "add":
      calculator.execute(new AddCommand(value));
      break;
    case "sub":
      calculator.execute(new SubCommand(value));
      break;
    case "mul":
      calculator.execute(new MulCommand(value));
      break;
    case "div":
      calculator.execute(new DivCommand(value));
      break;
    case "mod":
      calculator.execute(new ModCommand(value));
      break;
    case "set":
      calculator.execute(new SetCommand(value));
      break;
    case "result":
      calculator.getCurrentValue();
      break;
  }

  console.log("\nValue: " + calculator.getCurrentValue());
  return calculator.getCurrentValue();
}
