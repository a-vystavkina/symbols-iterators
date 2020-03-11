export default class Team {
  constructor() {
    this.members = new Set();
  }


  add(character) {
    if (this.members.has(character)) throw new Error('Данный персонаж добавлен ранее');
    this.members.add(character);
  }

  addAll(...characters) {
    for (const item of characters) {
      this.members.add(item);
    }
  }

  [Symbol.iterator]() {
    const sizeSet = this.members.size;
    let currSet = 0;
    const iterTeam = this.members.values();
    return {
      next() {
        if (currSet < sizeSet) {
          currSet += 1;
          return {
            value: iterTeam.next().value,
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    };
  }

  toArray() {
    return Array.from(this.members);
  }
}

const team = new Team();
console.log(team);
