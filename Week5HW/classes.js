class item{
    constructor(id, name, price) {
        this.id= id;
        this.name= name;
        this.price= price
    }
};
class gameConsole extends item {
    constructor(id, name, price, console){
    super(id, name, price)
    this.console = console;
    }
};
class videoGame extends gameConsole {
    constructor(id, name, price, console, game){
        super(id, name, price, console, game)
        this.game= game;
    }
}
console.log(videoGame);