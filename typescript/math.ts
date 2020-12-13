export class Math {

  private p1: number
  private p2: number

  public constructor(p1: number, p2: number) {
    this.p1 = p1
    this.p2 = p2
  }

  addition() { console.log(`addition = ${this.p1 + this.p2}`) }
  subtraction() { console.log(`subtraction = ${this.p1 - this.p2}`) }
  division() { console.log(`division = ${this.p1 / this.p2}`) }
  multiplication() { console.log(`multiplication = ${this.p1 * this.p2}`) }

}

export const pi = 3.14