const expresss = require("express");
const router = expresss.Router();
const notesController = require("../controllers/notesController");

router
  .route("/")
  .get(notesController.getAllNotes)
  .post(notesController.createNewNote)
  .patch(notesController.updateNote)
  .delete(notesController.deleteNote);

module.exports = router;
