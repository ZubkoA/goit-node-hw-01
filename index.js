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

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "e6ywwRe4jcqxXfCZOj_1e" });
// invokeAction({
//   action: "add",
//   name: "Aleck Hords",
//   email: "hords@sceler.net",
//   phone: "(748) 206-8856",
// });
// invokeAction({ action: "remove", id: "e6ywwRe4jcqxXfCZOj_1e" });

invokeAction(argv);
