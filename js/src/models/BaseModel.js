export default class BaseModel{

    constructor(){

        this.data = {};

    }

    fetcher(config){

        if(!config.success || !config.error || !config.url){

            return false;

        }

        $.ajax({

            url: config.url,
            type: config.type || 'GET',
            data: JSON.stringify(config.data),
            success: config.success,
            error: config.error

        });

        return true;

    }

    parseData(data){

        this.data = data || {};

        return true;

    }

}