let map = [
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
1
],
[
0,
0,
1,
0,
0
],
[
0,
1,
0,
0,
0
]
]
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        if (map[i][j] == 1) {
            led.plot(i, j)
        }
    }
}
basic.forever(function () {
	
})
