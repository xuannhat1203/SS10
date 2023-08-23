let a=+prompt("Nhập a");
let b = +prompt("Nhập b");
let c = +prompt("Nhập c");
let delta = b**2 -4*a*c ;
let sqrt = Math.sqrt (delta);
if ( delta == 0) {
    console.log("Phương trình có nghiệm kép")
}else if ( delta > 0 ) {
    console.log("x1=", (-b - Math.sqrt(delta)) / 2 * a);
    console.log("x2=", (-b + Math.sqrt(delta)) / 2 * a);
}else {
    console.log ("Vô nghiệm")
}
