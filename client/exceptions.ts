export class ClientsException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ClientsException';
    }
}