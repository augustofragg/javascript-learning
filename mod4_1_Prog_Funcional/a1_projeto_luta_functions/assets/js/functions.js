const defaultCharacter = {
    name: ' ',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense:0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life:100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life:50,
        maxLife:50,
        attack:14,
        defense:3
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense:4
    }
}

const creteBigMonster = () => {
    return {
        ...defaultCharacter,
        name:'Big Monster',
        life:120,
        maxLife:120,
        attack:16,
        defense:6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1E1:null,
    fighter2E1:null,

    start(fighter1, fighter2, fighter1E1, fighter2E1) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1E1 = fighter1E1;
        this.fighter2E1 = fighter2E1;

        this.fighter1E1.querySelector('.attackButton').
        addEventListener('click',() => this.doAttack(this.fighter1,this.fighter2));

        this.fighter2E1.querySelector('.attackButton').
        addEventListener('click',() => this.doAttack(this.fighter2,this.fighter1));

        this.update();
    },

    doAttack(attacking,attacked) {
        if(attacking.life <=0 || attacked.life <= 0) {
            log.addMessage("Acabou ");
            return
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        }
        else {
            log.addMessage(`${attacked.name} conseguiu se defender...`);
        }

        this.update();

    },
    
    update() {
        //fighter 1
        this.fighter1E1.querySelector('.name').innerHTML = `${this.fighter1.name} ${this.fighter1.life.toFixed(1)} HP`;
        let f1ptc = (this.fighter1.life/this.fighter1.maxLife) * 100;
        this.fighter1E1.querySelector('.bar').style.width = `${f1ptc}%`;

        //fighter 2
        this.fighter2E1.querySelector('.name').innerHTML = `${this.fighter2.name} ${this.fighter2.life.toFixed(1)} HP`;
        let f2ptc = (this.fighter2.life/this.fighter2.maxLife) * 100;
        this.fighter2E1.querySelector('.bar').style.width = `${f2ptc}%`;
    }
}

const log = {
    list: [],

    addMessage(msg) {
        this.list.push(msg);

        this.render();
    },

    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for(let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }

}