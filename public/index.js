"use strict";
// (01): Dynamic Type 
// (02): Function ke parameters ki type dena 
// (03): Function jo return karen uski type dena 
// (04): ts.config.json
// (05): Counter app using typescript
// ==========Function ==========\\
function sum(a, b) {
    return a + b;
}
const total = sum(10, 20);
function greet(username) {
    return `Welcome ${username}`;
}
const fullname = greet("Wajid Ali)");
//================================\\;
// ========== Dynamic Type ==========\\;
let abc = "Wajid Ali";
abc = 200;
abc = [10];
//================================\\;
