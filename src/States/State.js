export default class State
{
    constructor(gameObject){
        console.log(gameObject);
        this.gameObject = gameObject;
    }

    enter (oldState)
    {
        console.log("oldState:" + oldState.constructor.name);
    }

    exit(newState)
    {
        console.log("newState:" + newState.constructor.name);
    }

    update(){

    }

}
