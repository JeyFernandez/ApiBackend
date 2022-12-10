import { ulid } from 'ulid';
import { Product } from './models';
import { Product as IProduct} from './interfaces';

const list = async () => {
    return await Product.find();
}

const store = async (data: IProduct) => {

    const model = new Product({ name: data.name, detalle:data.detalle, image:data.image, categoria:data.categories, cantidad: data.cantidad });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Product.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Product.deleteOne({ id });
}


const update = async (id: string, data: IProduct) => {

    const model = await Product.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}