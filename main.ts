function collides (hero: Hero) {
	
}
function moveHero () {
    let heroPosition: number[] = []
    if (input.rotation(Rotation.Pitch) >= 15 && heroPosition[1] < 4) {
        heroPosition[1] = heroPosition[1] + 1
    } else if (input.rotation(Rotation.Pitch) <= -15 && heroPosition[1] > 0) {
        heroPosition[1] = heroPosition[1] - 1
    }
    if (input.rotation(Rotation.Roll) >= 15 && heroPosition[0] < 4) {
        heroPosition[0] = heroPosition[0] + 1
    } else if (input.rotation(Rotation.Roll) <= -15 && heroPosition[0] > 0) {
        heroPosition[0] = heroPosition[0] - 1
    }
}
interface Hero {
    x: number;
    y: number;
}
interface Map{
    
}


loops.everyInterval(500, function () {
    moveHero()
})
