import Router from './router'
class Finoer {
    private name: string = "";
    private skill1: string = "流翼11";
    public age: number = 21
    private router: Router<string>;

    constructor() {
      this.router = new Router(['1s'])

      console.log(this.router)
    }

    getName () {
        console.log('getname', this.name)

        return this.name
    }

    getSkill() {
      console.log('getSkill', this.skill1, 'age:', this.age)
    }


    setName(name: string) {
        this.name = name
    }
}

export default Finoer
