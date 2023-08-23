let a = +prompt("nhap diem bai kiem tra")
let b = +prompt("nhap diem giua ki")
let c = +prompt("nhap diem cuoi ki")
let hocLuc = (a + b + c) / 3;
if (hocLuc > 8) {
    console.log("hoc luc gioi");
} else if (hocLuc < 6 && hocLuc > 5) {
    console.log("hoc luc kha");
} else {
    console.log("hoc luc yeu");
}