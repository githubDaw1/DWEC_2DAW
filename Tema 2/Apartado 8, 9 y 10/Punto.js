class Punto {

  constructor( pX , pY ){
    this.pX = pX;
    this.pY = pY;
  }

  static distancia(a , b) {

    const dx = a.pX - b.pX;
    const dy = a.pY - b.pY;

    return Math.sqrt(dx * dx + dy * dy );
  }

  get coordX() {
    return this.pX;
  }

  devuelveXporY() {
    return (this.pX * this.pY);
  }
}