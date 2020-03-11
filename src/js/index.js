import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Deamon from './Daemon';
import Team from './Team';

const heroBowman = new Bowman('Bowman', 'Bowman');
const heroSwordsman = new Swordsman('Swordsman', 'Swordsman');
const heroMagician = new Magician('Magician', 'Magician');
const heroUndead = new Undead('Undead', 'Undead');
const heroZombie = new Zombie('Zombie', 'Zombie');
const heroDeamon = new Deamon('Deamon', 'Deamon');

const team = new Team();
team.addAll(heroBowman, heroSwordsman, heroMagician, heroUndead, heroZombie, heroDeamon);
for (const itemsT of team) {
  console.log(itemsT);
}
