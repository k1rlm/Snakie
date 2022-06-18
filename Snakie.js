// Я крч это, ну, кхм как там его, в общем, да пошли вы нахуй
// Эйей мне так хочется любыи с кем то ебаться эйей может это будешь ты я главный гангстер на районе 
// npm --build new access c:/users/k1rlm/desktop/snakie/snkie.js
class Snake {                  
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size                          // Начинаем анальную еблю с создания двух классов
        this.tail = [{x:this.x, y:this.y}]
        this.rotateX = 0
        this.rotateY = 1
    }

    move() {                                                                       
        let newRect

        if (this.rotateX == 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x + this.size,
                y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateX == -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x - this.size,
                y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateY == 1) {                                  // Марина Валентиновна я не знаю ось координат
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y + this.size
            }
        } else if (this.rotateY == -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y - this.size
            }
        }

        this.tail.shift()
        this.tail.push(newRect)
    }
}

class Apple{
    constructor(){
        let isTouching
        
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size    Соня прекрати парить маме расскажу
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size
            
            for (let i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y) {             
                    isTouching = true
                }
            }

            this.size = snake.size
            this.color = "red"

            if (!isTouching) {
                break;
            }
        }
    }
}


const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext('2d');                    // Приклеиваем на соплях наш html юзая камаз

window.onload = () => {
    gameLoop()
}

function gameLoop() {
    setInterval(show, 1000/20)                                     // Делаем графику как в киберпунке
}

function show() {
    update()            
    draw()
}

function update() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);  // Розы живут в навозе пацаны в поносе в мы мешали любовь с табаком
    snake.move()
    eatApple()
    checkHitWall()
}

function eatApple() {
    if(snake.tail[snake.tail.length - 1].x == apple.x &&
        snake.tail[snake.tail.length - 1].y == apple.y){              // Кормим змейку агушей
            snake.tail[snake.tail.length] = {x:apple.x, y: apple.y}
            apple = new Apple();
        }
}

function checkHitWall() {
    let headTail = snake.tail[snake.tail.length -1]

    if (headTail.x == - snake.size) {
        headTail.x = canvas.width - snake.size
    } else if (headTail.x == canvas.widh) {              // Чекхитвол а хуй его знает че за параша
        
        headTail.x = 0
    } else if (headTail.y == - snake.size) {
        headTail.y = canvas.height - snake.size
    } else if (headTail.y == canvas.height) {
        headTail.y = 0 
    }
}

function draw() {
    createRect(0,0,canvas.width, canvas.height, "black");  // Делаем эпичный фон из онимэ
    createRect(0,0, canvas.width, canvas.height);

    for (let i = 0; i < snake.tail.length; i++){
        createRect(snake.tail[i].x + 2.5, snake.tail[i].y + 2.5, // Растим хуй с помощью столовой соды
            snake.size - 5, snake.size- 5, "white");
    }

    canvasContext.font = "20px Arial"
    canvasContext.fillStyle = "#87CEFA"
    canvasContext.fillText("SCORE: " + (snake.tail.length -1),canvas.width - 120, 18);   
    createRect(apple.x, apple.y, apple.size, apple.size, apple.color);
}

function createRect(x,y,width, height,color) {
    canvasContext.fillStyle = color                // Артем скачай доту
    canvasContext.fillRect(x, y, width, height);
}

window.addEventListener("keydown", (event) => {             
    setTimeout(() => {
        if (event.keyCode == 37 && snake.rotateX != 1) {
            snake.rotateX = -1
            snake.rotateY = 0
        } else if (event.keyCode == 38 && snake.rotateY != 1) {
            snake.rotateX = 0
            snake.rotateY = -1                                        // И самая главная хуйня с которой СУКА Я ЕБАЛСЯ ВЕСЬ ДЕНЬ
        } else if (event.keyCode == 39 && snake.rotateX != -1) {
            snake.rotateX = 1
            snake.rotateY = 0
        } else if (event.keyCode == 40 && snake.rotateY != -1) {
            snake.rotateX = 0
            snake.rotateY = 1
        }
    }, 1)
})

const snake = new Snake(20,20,20); 
let apple = new Apple();
// Эпик финал
// лпагмлрлдроагелеовопшпгашешнщпгашрщршрзнщнзозрщрщрщрщпнзолалмдмомщтш
//лмовоаоаоаорщрлпшощпшрщалааоыгцлалрдишмшищрдидпщрщрдпдрлп
// угалалпвгплаонзроарлилмлпшпшапшапдрулашпшвнпопосоашпшплплгпо
//оагагалршкшешишсоанынаомомоаомшмосгмгмоаомшпгпгаалмлмлмомоалгм
//лппоагцнагпгпугршпналрдрдиоалррдплалаоагпшрлргидршпшплмбеагаш
//лпнашпшегаагвагацнамлрщлхлзршзорлпшрщршршпшппдтшпашагаашаплишшршр
//гг вагагпганунугпдпгаоиоснагагагаганагкагаганаопшмшм
// эаэпэааээаэаэаэаэаэааааааа не пизди мой код я сам его спиздил у ютубера индуса с 200 подписчиками 
// фортнайтеры и геншин фаги сасать
