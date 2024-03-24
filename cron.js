import Investment from "./models/investmentModel";
import User from "./models/userModel";
import Wallet from "./models/walletModel";

const updateInvestments = async () => {
  const invests = await Investment.find().populate("user").populate("type");
};
