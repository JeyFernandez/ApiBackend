import { Product } from "../products/interfaces";
import { ProdutsException } from '../products/exceptions';


const validateProductInput = (data: Product) => {
    if (!data.name) throw new ProdutsException("Property title is missing");
    if (data.name.length < 3) throw new ProdutsException("Property title must be at least 3 characters");
    if (data.name.length > 30) throw new ProdutsException("Property title must be at most 20 characters");
}

export default {
    validateProductInput
};