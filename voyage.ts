class Sejour{

    constructor(private _nom:string, private _prix:number){

    }

    getNom():string{
        return this._nom;
    }

    getPrix():number{
        return this._prix;
    }
}


class SejourService{

    private _sejour: Sejour[] = [];

    constructor(){
        this._sejour.push(new Sejour('Montpellier', 50))
        this._sejour.push(new Sejour('Londres', 200))
        this._sejour.push(new Sejour('Amsterdam', 250))
    }

    getByName(nom:string):Sejour | void{
        for(let sejour of this._sejour){
                 if(sejour.getNom() === nom){
                return sejour;
            }

        }
    }
}


const sejourService: SejourService = new SejourService();
const sejour : Sejour | void = sejourService.getByName('Londres');
console.log(sejour);