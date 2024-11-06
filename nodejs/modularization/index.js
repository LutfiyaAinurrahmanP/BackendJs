const Tiger = require("./tiger");
const Wolf = require("./wolf");

const fighting = (tiger, wolf)=> {
    if (tiger.strength > wolf.strength) {
        tiger.growl();
        return;
    }

    if (tiger.strength < wolf.strength) {
        wolf.howl();
        return;
    }

    console.log(`Tiger and Wold have save strength`);
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);