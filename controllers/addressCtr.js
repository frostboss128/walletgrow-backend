import asyncHandler from "../middleware/asyncHandler.js";
import Address from "../models/addressModel.js";

const addNewAddress = asyncHandler(async (req, res) => {
  const newAddress = await new Address.create({ address: req.body.address });
  res.status(200).json(newAddress);
});

const getActiveAddress = asyncHandler(async (req, res) => {
  const address = await Address.findOne({ active: true });
  res.status(200).json(address);
});

const getAddresses = asyncHandler(async (req, res) => {
  const addresses = await Address.find();
  res.status(200).json(addresses);
});

const updateAddress = asyncHandler(async (req, res) => {
  await Address.findOneAndUpdate({ active: true }, { active: false });
  const address = await Address.findByIdAndUpdate(req.params.addressId, { active: true });
  res.status(200).json(address);
});

const deleteAddress = asyncHandler(async (req, res) => {
  const address = await Address.findById(req.params.addressId);
  if (address.active) throw new Error(`Cannot delete active address`);
  await address.remove();
  res.status(200).json(address);
});

export { addNewAddress, getActiveAddress, getAddresses, updateAddress, deleteAddress };
