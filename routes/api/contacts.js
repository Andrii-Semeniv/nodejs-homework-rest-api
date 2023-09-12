const express = require("express");
const router = express.Router();
const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/contacts");

const cntr = require("../../controllers/contacts");

router.get("/", cntr.listContacts);

router.get("/:contactId", cntr.getContactById);

router.post("/", validateBody(schema.addSchema), cntr.addContact);

router.delete("/:contactId", cntr.removeContact);

router.put("/:contactId", validateBody(schema.addSchema), cntr.updateContact);

module.exports = router;
