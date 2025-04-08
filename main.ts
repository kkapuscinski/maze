function collides (hero: Hero, heroWantsToMove: Hero, map: Maze) {
    if (heroWantsToMove.y >= 0 && heroWantsToMove.y < 5 
        && heroWantsToMove.x >= 0 && heroWantsToMove.x < 5 
        && map.walls[heroWantsToMove.y][heroWantsToMove.x] != 1 )
     {
         hero.x = heroWantsToMove.x;
         hero.y = heroWantsToMove.y;
     }
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

function moveHero (hero: Hero, map: Maze) {
    let movePosition: Hero ={
        x: hero.x,
        y: hero.y,
    }
    if (input.rotation(Rotation.Roll) >= 15) {
        movePosition.x++
    } else if (input.rotation(Rotation.Roll) <= -15) {
        movePosition.x--
    }
    if (input.rotation(Rotation.Pitch) >= 15) {
        movePosition.y++
    } else if (input.rotation(Rotation.Pitch) <= -15) {
        movePosition.y--
    }
    collides(hero, movePosition, map)
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
    moveHero(hero, map);
    drawScreen(hero, map);
})
