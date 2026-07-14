const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const { connectMongo } = require("./config/db");
const User = require("./models/User");

// ⚙️ Change this to your registered email
const EMAIL = process.argv[2];

async function makeAdmin() {
  if (!EMAIL) {
    console.error("❌ Usage: node server/src/makeAdmin.js your@email.com");
    process.exit(1);
  }

  await connectMongo();

  const user = await User.findOne({ email: EMAIL.trim().toLowerCase() });

  if (!user) {
    console.error(`❌ No user found with email: ${EMAIL}`);
    process.exit(1);
  }

  user.isAdmin = true;
  await user.save();

  console.log(`✅ Success! "${user.name}" (${user.email}) is now an admin.`);
  console.log(`   → Log in at http://localhost:5173/login`);
  console.log(`   → Then visit http://localhost:5173/admin`);
  process.exit(0);
}

makeAdmin().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
