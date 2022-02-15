let Player_A = 0
let Player_B = 0
let Score_A = 0
let Score_B = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Player_A = randint(1, 3)
        if (Player_A == 1) {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Square)
                basic.pause(200)
                basic.clearScreen()
                basic.pause(200)
            }
        } else if (Player_A == 2) {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.SmallDiamond)
                basic.pause(200)
                basic.clearScreen()
                basic.pause(200)
            }
        } else if (Player_A == 3) {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Scissors)
                basic.pause(200)
                basic.clearScreen()
                basic.pause(200)
            }
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        Player_B = randint(1, 3)
        if (Player_B == 1) {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Square)
                basic.pause(200)
                basic.clearScreen()
                basic.pause(200)
            }
        } else if (Player_B == 2) {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.SmallDiamond)
                basic.pause(200)
                basic.clearScreen()
                basic.pause(200)
            }
        } else if (Player_B == 3) {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Scissors)
                basic.pause(200)
                basic.clearScreen()
                basic.pause(200)
            }
        }
        if (Player_A == 1 && Player_B == 3) {
            Score_A += 1
            soundExpression.giggle.play()
            basic.showString("A")
            music.stopAllSounds()
            basic.showNumber(Score_A)
            basic.pause(500)
            basic.clearScreen()
        } else if (Player_A == 2 && Player_B == 1) {
            Score_A += 1
            soundExpression.giggle.play()
            basic.showString("A")
            music.stopAllSounds()
            basic.showNumber(Score_A)
            basic.pause(500)
            basic.clearScreen()
        } else if (Player_A == 3 && Player_B == 2) {
            Score_A += 1
            soundExpression.giggle.play()
            basic.showString("A")
            music.stopAllSounds()
            basic.showNumber(Score_A)
            basic.pause(500)
            basic.clearScreen()
        } else if (Player_B == 1 && Player_A == 3) {
            Score_B += 1
            soundExpression.slide.play()
            basic.showString("B")
            music.stopAllSounds()
            basic.showNumber(Score_B)
            basic.pause(500)
            basic.clearScreen()
        } else if (Player_B == 2 && Player_A == 1) {
            Score_B += 1
            soundExpression.slide.play()
            basic.showString("B")
            music.stopAllSounds()
            basic.showNumber(Score_B)
            basic.pause(500)
            basic.clearScreen()
        } else if (Player_B == 3 && Player_A == 2) {
            Score_B += 1
            soundExpression.slide.play()
            basic.showString("B")
            music.stopAllSounds()
            basic.showNumber(Score_B)
            basic.pause(500)
            basic.clearScreen()
        } else {
            soundExpression.mysterious.play()
            basic.showString("DRAW")
            music.stopAllSounds()
        }
    }
    if (input.isGesture(Gesture.Shake)) {
        Score_A = 0
        Score_A = 0
        basic.showString("NEW GAME")
    }
})
