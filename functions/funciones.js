class Persona {
  constructor(name) {
    this.name = name;
  }
  saludar() {
    console.log("Hola Soy: ", this.name);
  }
}

const yo = new Persona("Francisco");
yo.saludar();
