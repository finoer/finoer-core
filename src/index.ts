class Finoer {
    private name: string = "";

    getName () {
        console.log(this.name)

        return this.name
    }

    setName(name: string) {
        this.name = name
    }
}

export default Finoer