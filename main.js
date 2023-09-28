let adam = new Human("adam", 1, 65);
let eva = new Human("eva", 2, 55);
let apple1 = new Apple(10);

while (!apple1.isEmpty()) {
    document.write("Adam ăn táo <br>");
    adam.eatApple(apple1);
    document.write("Quả táo còn: <br>");
    document.write(apple1.weight + " đơn vị <br>");
    document.write("Cân nặng của Adam là: " + adam.weight + "<br>");
    document.write("Eva ăn táo <br>");
    eva.eatApple(apple1);
    document.write("Quả táo còn: <br>");
    document.write(apple1.weight + " đơn vị <br>");
    document.write("Cân nặng của Eva là: " + eva.weight + "<br>");
}