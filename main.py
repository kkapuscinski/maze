map2 = [[0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0]]
for i in range(5):
    for j in range(5):
        if map2[i][j] == 1:
            led.plot(i, j)

def on_forever():
    pass
basic.forever(on_forever)
