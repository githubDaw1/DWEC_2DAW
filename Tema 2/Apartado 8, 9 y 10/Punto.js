class Punto {

  constructor(pX , pY){
    this.pX = pX;
    this.pY = pY;
  }

  static distancia(a , b) {

    const resultado1 = Math.pow((a.pX - b.pX), 2);
    const resultado2 = Math.pow((a.pY - b.pY), 2);

    return Math.sqrt(resultado1 + resultado2);
  }

  get coordX() {return this.pX;}
  devuelveXporY() {return (this.pX * this.pY);}
}