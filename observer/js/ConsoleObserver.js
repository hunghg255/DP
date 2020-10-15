class ConsoleObserver {
  constructor() {

  }

  update(model) {
    console.log(`The number is ${model.number} add the color is ${model.color.toUpperCase()}`);
  }
}
