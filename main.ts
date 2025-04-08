function collides (hero: Hero) {
	
}

function drawScreen (hero: Hero, map: Maze)
{
    led.plotAll();
    led.toggleAll();
    led.plot(hero.x, hero.y);
    
    for (let i = 0; i < 5; i++) {
        
        for (let j = 0; j < 5; j++) {
            if (map.walls[j][i] == 1)
            {
                led.plot(i,j)
            }
            
          
        }
    }
}

function moveHero (hero: Hero) {
    let heroPosition: number[] = []
    if (input.rotation(Rotation.Roll) >= 15 && hero.x < 4) {
        hero.x++
    } else if (input.rotation(Rotation.Roll) <= -15 && hero.x > 0) {
        hero.x--
    }
    if (input.rotation(Rotation.Pitch) >= 15 && hero.y < 4) {
        hero.y++
    } else if (input.rotation(Rotation.Pitch) <= -15 && hero.y > 0) {
        hero.y--
    }
}
interface Hero {
    x: number;
    y: number;
}
interface Maze{
    walls: number[][]
}
let hero: Hero = {
    x: 0,
    y: 0,
}
let map: Maze = 
{
    walls: [
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
    ]
}


loops.everyInterval(500, function () {
    moveHero(hero);
    drawScreen(hero, map);
})
