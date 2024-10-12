
// (01): Dynamic Type 
// (02): Function ke parameters ki type dena 
// (03): Function jo return karen uski type dena 
// (04): ts.config.json
// (05): Counter app using typescript



// ==========Function ==========\\
function sum(a: number, b: number): number {
    return a + b;
}
const total: number = sum(10, 20)

function greet(username: string): string {
    return `Welcome ${username}`
}
const fullname: string = greet("Wajid Ali)");
//================================\\;



// ========== Dynamic Type ==========\\;
let abc: any = "Wajid Ali";
abc = 200;
abc = [10];
//================================\\;


