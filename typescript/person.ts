export class Person {
  // properties
  private _name: string
  private _address: string
  private _age: number
  private _phone: string
  private _email: string

  // constructor
  public constructor(name: string, address: string, age: number, phone: string, email: string) {
    this._name = name
    this._address = address
    this._age = age
    this._phone = phone
    this._email = email
  }

  // setters 
  public set name(name: string) { this._name = name }
  public set address(address: string) { this._address = address }
  public set age(age: number) { this._age = age }
  public set phone(phone: string) { this._phone = phone }
  public set email(email: string) { this._email = email }

  // getters
  public get name(): string { return this._name }
  public get address(): string { return this._address }
  public get age(): number { return this._age }
  public get phone(): string { return this._phone }
  public get email(): string { return this._email }

  // facilitators
  public canVote() {
    if (this._age >= 18) {
      console.log(`${this._name} is eligible for voting`)
    } else {
      console.log(`${this._name} is NOT eligible for voting`)
    }
  }

  public printInfo() {
    console.log(`name: ${this._name}`)
    console.log(`address: ${this._address}`)
    console.log(`age: ${this._age}`)
    console.log(`phone: ${this._phone}`)
    console.log(`email: ${this._email}`)
  }

}

// const p1 = new Person('person1', 'pune', 30, '+9134435', 'person1@test.com')
// p1.canVote()
// p1.printInfo()

export function testFunction() {
  console.log('inside test Function')
}