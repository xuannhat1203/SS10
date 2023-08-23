let a = +prompt("Nhap mot so tuy y ")
let b = +prompt("Nhap mot so tuy y ")
let c = +prompt("Nhap mot so tuy y ")
if (a > b && a > c) {
    console.log(`${a} la so lon nhat`)
} else if (b > a && b > c) {
    console.log(`${b} la so lon nhat`)
} else {
    console.log(`${c} la so lon nhat`);
}