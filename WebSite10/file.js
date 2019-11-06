debugger;
var num;
var perimeter, area;
var perimeter, area;
var shape = parseInt(prompt("Welcome to the best shape simulation ever in the entire world!" + "\n" + "Please select desired shape:" + "\n" + "1) Square" + "\n" + "2) Rectangle" + "\n" + "3) Triangle"));
if (shape != 1 && shape != 2 && shape != 3) {
    document.write("Error! Please select 1 or 2 or 3, for the shape type");
}
else {
    switch (shape) {
        case 1:
            printSquare();
            break;
        case 2:
            printRectangle();
            break;
        case 3: printTriangle();
    }
}
//# sourceMappingURL=file.js.map