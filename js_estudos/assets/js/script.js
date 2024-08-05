let char = createKnight('Augusto');
let monster = createLittleMonster();

stage.start(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
);
