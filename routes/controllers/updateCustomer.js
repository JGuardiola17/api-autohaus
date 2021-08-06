import {
  getCustomer,
  updateCustomer as updateCustomerCtrl,
} from '../../data/controllers/customers';

export const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { lastName, firstName, gender, street, postalCode, city } = req.body;

    if (!lastName || !firstName || !gender || !street || !postalCode || !city) {
      throw new Error('All fields are mandatory');
    }

    await updateCustomerCtrl(
      { _id: id },
      { $set: { lastName, firstName, gender, street, postalCode, city } }
    );

    const updatedCustomer = await getCustomer({ _id: id });
    res.status(200).json({ updatedCustomer });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default { updateCustomer };
