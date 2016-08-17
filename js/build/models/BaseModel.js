export default class BaseModel{

    constructor(){

        this.data = {};

    }

    parseData(data){

        this.data = data || {};

        return true;

    }

}