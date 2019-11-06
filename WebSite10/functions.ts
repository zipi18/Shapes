function printSquare(): void {
    var num: number = parseFloat(prompt("please enter square side length:"));
    if (num > 50) {
        document.write("Error! Please enter a number up to 50");
    }
    else {
        if ((num % 2) != 1 && (num % 2) != 0) {
            document.write("Error! Please enter a positive integer number");
        }
        else {
            var shapeContent: number = parseInt(prompt("please select shape content:" + "\n" + "1) * * * * * " + "\n" + "2) *         * " + "\n" + "3) 1 2 3 4 5" + "\n" + "4) 5 4 3 2 1"));
            if (shapeContent != 1 && shapeContent != 2 && shapeContent != 3 && shapeContent != 4) {
                document.write("Error! Please select 1 or 2 or 3 or 4, for the shape content");
            }
            else {


                switch (shapeContent) {
                    case 1: for (var j = 0; j < num; j++) {
                        for (var i = 1; i <= num; i++) {
                            document.write("*" + " ");
                        }
                        document.write("</br>");

                    }

                        break;

                    case 2: for (var j = 1; j <= num; j++) {
                        for (var i = 1; i <= num; i++) {
                            if (j == 1 || j == num) {
                                document.write("*" + " ");
                            }
                            else {
                                if (i == 1) {
                                    document.write("*");
                                }
                                if (i == num) {
                                    document.write("*");
                                }
                                if (i == num - 1) {
                                    document.write("&nbsp");
                                }
                                else {
                                    document.write("&nbsp" + " ");

                                }
                            }
                        }
                        document.write("</br>");

                    }
                        break;
                    case 3: for (var j = 0; j < num; j++) {
                        for (var i = 1; i <= num; i++) {
                            document.write(i + " ");
                        }
                        document.write("</br>");

                    };
                        break;
                    case 4: for (var j = 0; j < num; j++) {
                        for (var i = num; i > 0; i--) {
                            document.write(i + " ");
                        }
                        document.write("</br>");

                    };
                        break;

                }
                document.write("<hr/>");
                perimeter = 4 * num;
                area = num * num;
                document.write("Square Perimeter:" + perimeter.toString() + "</br>");
                document.write("Square Area:" + area.toString());

            }
        }
    }
}
function printRectangle(): void {
    var rectangleWidth: number = parseFloat(prompt("please enter rectangle width:"));
    if (rectangleWidth > 50) {
        document.write("Error! Please enter a number up to 50");
    }
    else {
        if (rectangleWidth % 2 != 0 && rectangleWidth % 2 != 1) {
            document.write("Error! Please enter a positive integer number");
        }
        else {
            var rectangleHeigth: number = parseFloat(prompt("please enter rectangle heigth:"));
            if (rectangleHeigth > 50) {
                document.write("Error! Please enter a number up to 50");
            }
            else {
                if (rectangleHeigth % 2 != 0 && rectangleHeigth % 2 != 1) {
                    document.write("Error! Please enter a positive integer number");

                }
                else {
                    var shapeContent: number = parseInt(prompt("please select shape content:" + "\n" + "1) * * * * * " + "\n" + "2) *         * " + "\n" + "3) 1 2 3 4 5" + "\n" + "4) 5 4 3 2 1"));
                    if (shapeContent != 1 && shapeContent != 2 && shapeContent != 3 && shapeContent != 4) {
                        document.write("Error! Please select 1 or 2 or 3 or 4, for the shape content");
                    }
                    else {
                        switch (shapeContent) {
                            case 1:
                                for (var i = 1; i <= rectangleHeigth; i++) {
                                    for (var j = 1; j <= rectangleWidth; j++) {
                                        document.write("*" + " ");
                                    }
                                    document.write("</br>");

                                }

                                break;

                            case 2: for (var j = 1; j <= rectangleHeigth; j++) {
                                for (var i = 1; i <= rectangleWidth; i++) {
                                    if (j == 1 || j == rectangleHeigth) {
                                        document.write("*" + " ");
                                    }
                                    else {
                                        if (i == 1) {
                                            document.write("*");
                                        }
                                        if (i == rectangleWidth) {
                                            document.write("*");
                                        }
                                        if (i == rectangleWidth - 1) {
                                            document.write("&nbsp");
                                        }
                                        else {
                                            document.write("&nbsp" + " ");

                                        }
                                    }
                                }
                                document.write("</br>");

                            }

                                break;

                            case 3: for (var j = 1; j <= rectangleHeigth; j++) {
                                for (var i = 1; i <= rectangleWidth; i++) {
                                    document.write(i + " ");
                                }
                                document.write("</br>");

                            }
                                break;
                            case 4: for (var j = 0; j < rectangleHeigth; j++) {
                                for (var i = rectangleWidth; i > 0; i--) {
                                    document.write(i + " ");
                                }
                                document.write("</br>");

                            }
                                break;

                        }
                        document.write("<hr/>");
                        perimeter = (2 * rectangleHeigth) + (2 * rectangleWidth);
                        area = rectangleHeigth * rectangleWidth;
                        document.write("Rectangle Perimeter:" + perimeter.toString() + "</br>");
                        document.write("Rectangle Area:" + area.toString());
                    }
                }
            }
        }
    }
}
function printTriangle(): void {
    var triangleLength: number = parseFloat(prompt("please enter triangle side length:"));
    if (triangleLength > 50) {
        document.write("Error! Please enter a number up to 50");
    }
    else {
        if (triangleLength % 2 != 0 && triangleLength % 2 != 1) {
            document.write("Error! Please enter a positive integer number");
        }
        else {

            var shapeContent: number = parseInt(prompt("please select shape content:" + "\n" + "1) * * * * * " + "\n" + "2) *         * " + "\n" + "3) 1 2 3 4 5" + "\n" + "4) 5 4 3 2 1"));
            if (shapeContent != 1 && shapeContent != 2 && shapeContent != 3 && shapeContent != 4) {
                document.write("Error! Please select 1 or 2 or 3 or 4, for the shape content");
            }
            else {
                var a: number = 1;
                switch (shapeContent) {
                    case 1: for (var i = 1; i <= triangleLength; i++) {
                        for (var j = 1; j <= triangleLength; j++) {
                            if (j <= i) {

                                document.write("*" + " ");
                            }
                        }
                        document.write("</br>");

                    }

                        break;

                    case 2: for (var i = 1; i <= triangleLength; i++) {
                        for (var j = 1; j < triangleLength; j++) {

                            if (j == 1) {
                                document.write("*" + " ");

                            }

                            if (i == triangleLength) {

                                document.write("*" + " ");


                            }

                            if (i == j && i != 1 && j != 1) {
                                {

                                    for (var x = 2; x < j; x++) {
                                        document.write("&nbsp&nbsp");
                                    }
                                    document.write("*" + " ");


                                }

                            }

                        }
                        document.write("</br>");

                    }



                        break;

                    case 3: for (var i = 1; i <= triangleLength; i++) {
                        for (var j = 1; j < triangleLength; j++) {
                            if (j == 1 && i == 1) {
                                document.write(" ");

                            }
                            if (j == 1) {
                                document.write("*" + " ");

                            }

                            if (i == triangleLength) {
                                document.write("*" + " ");

                            }

                            if (i == j) {
                                {

                                    for (var x = 2; x < j; x++) {
                                        document.write("&nbsp&nbsp");
                                    }
                                    if (i != 1 && j != 1) {
                                        document.write("*" + " ");
                                    }


                                }

                            }

                        }
                        document.write("</br>");

                    }

                        break;

                    case 4: for (var i = triangleLength; i >= 1; i--) {

                        for (var j = triangleLength; j >= i; j--) {


                            document.write(j + " ");

                        }

                        document.write("<br/>");


                    }
                }
                document.write("<hr/>");
                perimeter = 3 * triangleLength;
                area = ((triangleLength * triangleLength) / 4) * 2;
                document.write("Triangle Perimeter:" + perimeter.toString() + "</br>");
                document.write("Triangle Area:" + area.toString());
            }
        }
    }
}
