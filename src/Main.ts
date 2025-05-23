import { Admin } from "./Admin";
import { Customer } from "./Customer";

const admin = new Admin("adminUser", "admin@example.com");
const customer = new Customer("johnDoe", "john@example.com");

admin.login("adminUser", "adminpass");       // overridden
customer.login("johnDoe", "123456");         // overridden

admin.login("admin@example.com");            // simulated overloaded
customer.login("john@example.com");          // simulated overloaded

console.log(`Admin role: ${admin.getRole()}`);
console.log(`Customer role: ${customer.getRole()}`);