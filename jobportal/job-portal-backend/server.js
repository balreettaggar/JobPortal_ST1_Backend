// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const path = require("path");
// const fs = require("fs");
// const multer = require("multer");

// const app = express();

// // ✅ Ensure uploads and resumes directories exist
// const uploadsDir = path.join(__dirname, "uploads");
// const resumesDir = path.join(uploadsDir, "resumes");

// if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
// if (!fs.existsSync(resumesDir)) fs.mkdirSync(resumesDir);

// // ✅ Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/jobportal")
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // ✅ Middleware
// app.use(
//   cors({
//     origin: "http://localhost:3000", // React frontend
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(cookieParser());

// // ✅ Serve resumes statically
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // -------- Multer Setup for file uploads --------
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, resumesDir),
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowed = /pdf|doc|docx/;
//   const ext = path.extname(file.originalname).toLowerCase();
//   if (allowed.test(ext)) cb(null, true);
//   else cb(new Error("Only PDF, DOC, DOCX files allowed"));
// };

// const upload = multer({ storage, fileFilter });

// // ✅ Routes
// const authRoutes = require("./routes/auth");
// const jobRoutes = require("./routes/jobRoutes");
// const applicationsRouter = require("./routes/applications");
// const resumeRoutes = require("./routes/resumeRoutes");

// app.get("/", (req, res) => {
//   res.send("🚀 API is running...");
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/applications", applicationsRouter);
// app.use("/api/resumes", resumeRoutes);



// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//   console.error("🔥 Global error handler:", err.stack);
//   res.status(500).json({ message: "Something broke!", error: err.message });
// });

// // ✅ Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));














// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const path = require("path");
// const fs = require("fs");
// const multer = require("multer");

// const app = express();

// // ✅ Ensure uploads and resumes directories exist
// const uploadsDir = path.join(__dirname, "uploads");
// const resumesDir = path.join(uploadsDir, "resumes");

// if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
// if (!fs.existsSync(resumesDir)) fs.mkdirSync(resumesDir);

// // ✅ Connect to MongoDB
// mongoose
//   // .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/jobportal")

//   // balreet singh made it correct with the help of mayank without chatGpt.
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // ✅ Middleware
// app.use(
//   cors({
//     origin: "http://localhost:3000", // React frontend
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(cookieParser());

// // ✅ Serve resumes statically
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // -------- Multer Setup for file uploads --------
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, resumesDir),
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowed = /pdf|doc|docx/;
//   const ext = path.extname(file.originalname).toLowerCase();
//   if (allowed.test(ext)) cb(null, true);
//   else cb(new Error("Only PDF, DOC, DOCX files allowed"));
// };

// const upload = multer({ storage, fileFilter });

// // ✅ Routes
// const authRoutes = require("./routes/auth");
// const jobRoutes = require("./routes/jobRoutes");
// const applicationsRouter = require("./routes/applications");
// const resumeRoutes = require("./routes/resumeRoutes");


// // ✅ Use routes
// app.get("/", (req, res) => {
//   res.send("🚀 API is running...");
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/applications", applicationsRouter);
// app.use("/api/resumes", resumeRoutes);

// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//   console.error("🔥 Global error handler:", err.stack);
//   res.status(500).json({ message: "Something broke!", error: err.message });
// });

// // ✅ Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));





require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const app = express();

// ✅ Ensure uploads and resumes directories exist
const uploadsDir = path.join(__dirname, "uploads");
const resumesDir = path.join(uploadsDir, "resumes");

if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
if (!fs.existsSync(resumesDir)) fs.mkdirSync(resumesDir);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // React frontend
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// ✅ Serve resumes statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// -------- Multer Setup for file uploads (future use) --------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, resumesDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = /pdf|doc|docx/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.test(ext)) cb(null, true);
  else cb(new Error("Only PDF, DOC, DOCX files allowed"));
};

const upload = multer({ storage, fileFilter });

// ✅ Routes
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobRoutes");
const applicationsRouter = require("./routes/applications");
const resumeRoutes = require("./routes/resumeRoutes");

// ✅ Test API
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// ✅ Use routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationsRouter);
app.use("/api/resumes", resumeRoutes);

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("🔥 Global error handler:", err.stack);
  res
    .status(500)
    .json({ message: "Something broke on the server!", error: err.message });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

