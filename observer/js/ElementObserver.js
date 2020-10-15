class ElementObserver {
  constructor(idElement) {
    this.element = document.getElementById(idElement);
  }

  update(model) {
    this.element.innerHTML = model.number;
    this.element.style.backgroundColor = model.color;
  }
}
