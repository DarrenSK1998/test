Dice = 0

def on_forever():
    global Dice
    if input.button_is_pressed(Button.A):
        Dice = randint(1, 3)
        if Dice == 1:
            for index in range(3):
                basic.show_icon(IconNames.SQUARE)
                basic.pause(200)
                basic.clear_screen()
                basic.pause(200)
        elif Dice == 2:
            for index2 in range(3):
                basic.show_icon(IconNames.SMALL_DIAMOND)
                basic.pause(200)
                basic.clear_screen()
                basic.pause(200)
        elif Dice == 3:
            for index3 in range(3):
                basic.show_icon(IconNames.SCISSORS)
                basic.pause(200)
                basic.clear_screen()
                basic.pause(200)
basic.forever(on_forever)
