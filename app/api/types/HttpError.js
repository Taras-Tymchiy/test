export class HttpError extends Error {
    response: Response;
    constructor(resp: Response) {
        super();
        this.response = resp;
        const { status, statusText } = this.response;
        if (statusText) {
            this.message = this.response.statusText;
        } else if (status === 404) {
            this.message = '404 - resource not found';
        } else {
            this.message = 'Connection error';
        }
    }
}