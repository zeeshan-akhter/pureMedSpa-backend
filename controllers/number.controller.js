const Number = require("../models/number.model");

// const fs = require("fs");

// const jsonData = fs.readFileSync("./data/data-0.json");
// const itemData = JSON.parse(jsonData);

// const seedNumberDatabase = async () => {
//   try {
//     for (const item of itemData) {
//       const newItem = new Number(item);
//       await newItem.save();
//       console.log(`Item ${newItem.name} seeded`);
//     }
//     console.log("Item database seeding complete");
//   } catch (error) {
//     console.error("Error seeding item database:", error);
//   } finally {
//     mongoose.disconnect();
//   }
// };

class NumberController {
  // async getAllNumbers(req, res) {
  //   try {
  //     const numbers = await Number.find();
  //     res.json(numbers);
  //   } catch (error) {
  //     console.error("Error fetching numbers:", error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // }

  // async addNumber(req, res) {
  //   const { number } = req.body;

  //   try {
  //     const existingNumber = await Number.findOne({ number });

  //     if (existingNumber) {
  //       res.json({ message: "Number already exists in the database." });
  //     } else {
  //       await Number.create({ number });
  //       res.json({ message: "Number added successfully." });
  //     }
  //   } catch (error) {
  //     console.error("Error adding number:", error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // }

  async checkNumber(req, res) {
    const { number } = req.params;

    try {
      const existingNumber = await Number.findOne({ number });

      if (existingNumber) {
        res.json({ message: "Number exists in the database." });
      } else {
        res.json({ message: "Number does not exist in the database." });
      }
    } catch (error) {
      console.error("Error checking number:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new NumberController();
