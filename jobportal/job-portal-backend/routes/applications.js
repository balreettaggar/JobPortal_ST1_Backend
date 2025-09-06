// const express = require("express");
// const multer = require("multer");
// const Application = require("../models/Application");

// const router = express.Router();
// const upload = multer(); // ❌ Disk storage nahi, direct memory buffer

// // Submit application
// router.post("/", upload.single("resume"), async (req, res) => {
//   try {
//     const { name, email, phone, jobId } = req.body;

//     const newApp = new Application({
//       name,
//       email,
//       phone,
//       jobId,
//       resume: req.file ? {
//         data: req.file.buffer,
//         contentType: req.file.mimetype,
//         filename: req.file.originalname,
//       } : null,
//     });

//     await newApp.save();
//     res.status(201).json({ message: "Application submitted successfully!", application: newApp });
//   } catch (err) {
//     console.error("🔥 Application submit error:", err);
//     res.status(500).json({ message: "Failed to submit application", error: err.message });
//   }
// });

// // Fetch resume for employer
// router.get("/resume/:id", async (req, res) => {
//   try {
//     const application = await Application.findById(req.params.id);

//     if (!application || !application.resume) {
//       return res.status(404).send("Resume not found");
//     }

//     res.set("Content-Type", application.resume.contentType);
//     res.set("Content-Disposition", `inline; filename="${application.resume.filename}"`);
//     res.send(application.resume.data);
//   } catch (err) {
//     console.error("🔥 Resume fetch error:", err);
//     res.status(500).send("Error fetching resume");
//   }
// });

// module.exports = router;




//Asmita
// const express = require("express");
// const multer = require("multer");
// const Application = require("../models/Application");

// const router = express.Router();
// const upload = multer(); // store file in memory

// // ------------------- Submit Application -------------------
// router.post("/", upload.single("resume"), async (req, res) => {
//   try {
//     const { name, email, phone, jobId } = req.body;

//     const newApp = new Application({
//       name,
//       email,
//       phone,
//       jobId,
//       resume: req.file
//         ? {
//             data: req.file.buffer,
//             contentType: req.file.mimetype,
//             filename: req.file.originalname,
//           }
//         : null,
//     });

//     await newApp.save();
//     res.status(201).json({
//       message: "Application submitted successfully!",
//       application: newApp,
//     });
//   } catch (err) {
//     console.error("🔥 Application submit error:", err);
//     res.status(500).json({ message: "Failed to submit application", error: err.message });
//   }
// });

// // ------------------- Get All Applications -------------------
// router.get("/", async (req, res) => {
//   try {
//     const applications = await Application.find().sort({ createdAt: -1 });
//     res.json(applications);
//   } catch (err) {
//     console.error("🔥 Fetch applications error:", err);
//     res.status(500).json({ message: "Failed to fetch applications", error: err.message });
//   }
// });

// // ------------------- Get Resume by Application ID -------------------
// router.get("/resume/:id", async (req, res) => {
//   try {
//     const application = await Application.findById(req.params.id);
//     if (!application || !application.resume) return res.status(404).send("Resume not found");

//     res.set("Content-Type", application.resume.contentType);
//     res.set("Content-Disposition", `inline; filename="${application.resume.filename}"`);
//     res.send(application.resume.data);
//   } catch (err) {
//     console.error("🔥 Resume fetch error:", err);
//     res.status(500).send("Error fetching resume");
//   }
// });

// module.exports = router;






//Bhavisha

const express = require("express");
const multer = require("multer");
const Application = require("../models/Application");
const router = express.Router();

const upload = multer(); // memory storage

// Submit application
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, jobId } = req.body;
    if (!name || !email || !phone || !jobId)
      return res.status(400).json({ message: "All fields are required!" });

    const newApp = new Application({
      name,
      email,
      phone,
      jobId,
      resume: req.file
        ? { data: req.file.buffer, contentType: req.file.mimetype, filename: req.file.originalname }
        : null,
    });

    await newApp.save();
    res.status(201).json({ message: "Application submitted successfully!", application: newApp });
  } catch (err) {
    console.error("🔥 Application submit error:", err);
    res.status(500).json({ message: "Failed to submit application", error: err.message });
  }
});

// Get applicants for a specific job
router.get("/job/:jobId", async (req, res) => {
  try {
    const applications = await Application.find({ jobId: req.params.jobId }).sort({ createdAt: -1 });
    const applicants = applications.map(app => ({
      id: app._id,
      name: app.name,
      email: app.email,
      phone: app.phone,
      resumeId: app._id,
      resumeFilename: app.resume?.filename,
      status: app.status,
    }));
    res.json(applicants);
  } catch (err) {
    console.error("🔥 Fetch job applications error:", err);
    res.status(500).json({ message: "Failed to fetch applicants", error: err.message });
  }
});

// Download resume by application ID
router.get("/resume/:id", async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);
    if (!app || !app.resume) return res.status(404).send("Resume not found");

    res.set("Content-Type", app.resume.contentType);
    res.set("Content-Disposition", `inline; filename="${app.resume.filename}"`);
    res.send(app.resume.data);
  } catch (err) {
    console.error("🔥 Resume fetch error:", err);
    res.status(500).send("Error fetching resume");
  }
});

module.exports = router;

































