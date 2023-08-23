let a=+prompt("Nhập cạnh a");
let b = +prompt("Nhập cạnh b");
let c = +prompt("Nhập cạnh c");
if (a>=0 && b>0 && c>0) {
    if (a+b>c && b+c>a && a+c>b) {
        alert ("a,b,c là cạnh của một tam giác")
    }else {
        alert("a,b,c không là 1 cạch 1 tam giác")
    }
}
