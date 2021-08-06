import { Customer } from '../models/Customer';

export const getCustomer = (conditions) => Customer.findOne(conditions);

export const getCustomers = (conditions) => Customer.find(conditions);

export const createCustomer = (doc) => Customer.create(doc);

export const updateCustomer = (conditions, updatedDoc) => Customer.update(conditions, updatedDoc);

export const deleteCustomer = (conditions) => Customer.remove(conditions);
