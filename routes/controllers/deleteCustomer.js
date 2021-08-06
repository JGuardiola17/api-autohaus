import { deleteCustomer as deleteCustomerCtrl } from '../../data/controllers/customers';

export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await deleteCustomerCtrl({ _id: id });
    res.json({ customer });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default { deleteCustomer };
