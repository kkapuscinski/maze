def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

sprite = game.create_sprite(2, 2)
sprite.turn(Direction.RIGHT, 45)
sprite.move(1)

def on_forever():
    pass
basic.forever(on_forever)
