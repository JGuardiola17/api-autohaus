import { getCustomers as getCustomersCtrl } from '../../data/controllers/customers';

export const getCustomers = async (req, res) => {
  try {
    const { lastName } = req.query;

    console.log('last name', lastName);

    const conditions = {};

    // use lastName as search term
    if (lastName) {
      conditions.lastName = { $regex: lastName, $options: 'i' };
    }
    console.log('conditions', conditions);

    const customers = await getCustomersCtrl(conditions);

    // console.log('customers', customers);

    res.json({ customers });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default { getCustomers };
