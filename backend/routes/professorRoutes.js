const express = require("express");
const router = express.Router();
const {
  getProfessorRatings,
  getProfessorSummary,
  getProfessorWordCloud,
} = require("../controllers/professorController");

router.post("/ratings", getProfessorRatings);
router.post("/summary", getProfessorSummary);
router.post("/wordcloud", getProfessorWordCloud);

module.exports = router;
