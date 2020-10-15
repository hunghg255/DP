// https://viblo.asia/p/phan-2-observer-pattern-73KbvZrXvmWB

interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer {
  update(temperature: number);
}

class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  setTemperature(temp: number) {
    console.log('WeatherStation: new temperature measurent: ' + temp);
    this.temperature = temp;
    this.notifyObservers();
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }
  removeObserver(o: Observer) {
    const idx = this.observers.indexOf(o);
    this.observers.splice(idx, 1);
  }
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    console.log('TemperatureDisplay: I need to update display');
    // logic here
  }
}

class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    if (temperature > 25) {
      console.log('Fan: it very hots');
    } else {
      console.log('Fan: it nice and cool');
    }
  }
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
