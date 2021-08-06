import Router from 'express';
import { createCustomer } from './controllers/createCustomer';
import { getCustomers } from './controllers/getCustomers';
import { getCustomer } from './controllers/getCustomer';
import { updateCustomer } from './controllers/updateCustomer';
import { deleteCustomer } from './controllers/deleteCustomer';

export const router = Router();

router.get('/customers/:id', getCustomer);
router.get('/customers', getCustomers);
router.post('/customers', createCustomer);
router.put('/customers/:id', updateCustomer);
router.delete('/customers/:id', deleteCustomer);

export default { router };
