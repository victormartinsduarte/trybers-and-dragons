abstract class Race {
  constructor(readonly name: string, readonly dexterity: number) {}

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
// import Fighter from '../Fighter';

// abstract class Battle {
//   constructor(protected player: Fighter) { }

//   // Should return 1 if player wins, -1 otherwise
//   fight(): number {
//     return this.player.lifePoints === -1 ? -1 : 1;
//   }
// }

// export default Battle;