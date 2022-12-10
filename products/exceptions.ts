export class ProdutsException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ProdutsException';
    }
}