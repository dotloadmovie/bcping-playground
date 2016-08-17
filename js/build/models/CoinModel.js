import BaseModel from './BaseModel.js';

export default class CoinModel extends BaseModel{

    constructor(){

        super();

    }

    getData(){

        var val = {
            name: 'This is my name',
            value: 'And this is my value'
        }

    }

}