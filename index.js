 import { program } from "commander";
import contactServises from "./contacts.js";



const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactServises.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const contactById = await contactServises.getContactById(id);
      console.log(contactById);
      break;

    case "add":
      const newContact = await contactServises.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deletedContact = await contactServises.removeContact(id);
      console.log(deletedContact);
      break;

    case "update":
      const updatedContact = await contactServises.updateContactById(id, {
        name,
        email,
        phone,
      });
      console.log(updatedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// використання модуля commander для парсингу аргументів командного рядка
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();
invokeAction(options);






// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "5" });
// invokeAction({
//   action: "add",
//   name: "Mango ",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
// invokeAction({ action: "remove", id: "6xoP1QD-gc0r26QwkJunh" });
// invokeAction({
//   action: "update",
//   id: "9fg9zr5z1hgIPCB4-4R-s",
//   name: "Mango3",
//   email: "mango@gmail.com",
//   phone: "322-22-55",
// });
