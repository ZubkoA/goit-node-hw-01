const argv = require("yargs").argv;
const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.table(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.table(newContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.table(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
