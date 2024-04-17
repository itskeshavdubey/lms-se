const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" }, // Corrected typo in "Photography"
        { name: "Accounting" },
        { name: "Law" },
        { name: "Economics" },
        { name: "Mathematics" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error setting the database categories", error); // Corrected typo in "setting"
  } finally {
    await database.$disconnect();
  }
}

main();
