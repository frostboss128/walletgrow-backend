import { faker } from "@faker-js/faker";
import User from "./models/userModel.js";
import Wallet from "./models/walletModel.js";

const buildFake = () => {
  for (let i = 0; i < 423; i++) {
    (async () => {
      let user = await User.create({
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        verified: false,
        level: 0,
        binance: 0,
        roles: "user",
      });
      console.log(user._id);
      await Wallet.create({ user: user._id });
    })();
  }
};

export default buildFake;
