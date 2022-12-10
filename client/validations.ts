import { Client } from "./interfaces";
import {ClientsException } from './exceptions';


const validateCategoryInput = (data: Client) => {
    if (!data.name) throw new ClientsException("Property name is missing");
    if (data.name.length < 3) throw new ClientsException("Property name must be at least 3 characters");
    if (data.name.length > 20) throw new ClientsException("Property name must be at most 20 characters");

}

export default {
    validateCategoryInput
}