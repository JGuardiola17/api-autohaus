import { getCustomer as getCustomerCtrl } from '../../data/controllers/customers';

export const getCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await getCustomerCtrl({ _id: id });
    res.json({ customer });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default { getCustomer };
