import { createCustomer as createCustomerCtrl } from '../../data/controllers/customers';

export const createCustomer = async (req, res) => {
  try {
    const { lastName, firstName, gender, street, postalCode, city } = req.body;

    if (!lastName || !firstName || !gender || !street || !postalCode || !city) {
      throw new Error('All fields are mandatory');
    }

    const customer = await createCustomerCtrl({
      lastName,
      firstName,
      gender,
      street,
      postalCode,
      city,
    });

    res.status(200).json({ customer });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default { createCustomer };
