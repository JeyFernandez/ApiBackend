import { ulid } from 'ulid';
import { Client } from './models';
import { Client as IClient } from './interfaces';

const list = async () => {
    return await Client.find();
}

const store = async (data: IClient) => {


    const model = new Client({ name: data.name,bibliografia:data.bibliografia, avatar:data.avatar });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Client.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Client.deleteOne({ id });
}


const update = async (id: string, data: IClient) => {

    const model = await Client.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}