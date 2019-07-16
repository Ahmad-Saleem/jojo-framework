
// think about using RxJs 

export default class ApiRequest extends Request{
    constructor({...params}){
        const { url, ...rest } = params
        super(url, rest)
        this.url = url
        this.response = new Response()
        this.status = STATUS.INIT
        this.message = ''
    }

    send = async () => {
        this.status = STATUS.PENDING
        this.response = await fetch(this)
    }

    json = async () => {
        // check if there is response
        return await this.response.json();
    }
}

export const STATUS = {
        INIT: 'INIT',
        PENDING: 'PENDING',
        SUCCESS: 'SUCCESS',
        FAILD: 'FAILD',
} 