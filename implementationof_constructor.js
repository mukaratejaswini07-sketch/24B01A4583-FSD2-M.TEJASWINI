"use strict";
class MountainExplorer {
    // 1. Properties
    explorerName;
    expedition;
    energyLevel;
    constructor(explorerName, expedition, energyLevel) {
        this.explorerName = explorerName;
        this.expedition = expedition || "Mountain Climbing";
        this.energyLevel = energyLevel || 100;
    }
    // 3. Methods
    showDetails() {
        console.log("Explorer Name:", this.explorerName);
        console.log("Expedition:", this.expedition);
        console.log("Energy Level:", this.energyLevel + "%");
    }
    restoreEnergy(units) {
        this.energyLevel += units;
        console.log(`${this.explorerName} restored ${units}% energy`);
    }
}
// 4. Using Properties and Methods Post Construction
// Object using first constructor
let explorer1 = new MountainExplorer("Alpine-Hero");
// Object using overloaded constructor
let explorer2 = new MountainExplorer("Peak-Master", "Snow Valley Expedition", 65);
console.log("Explorer 1");
explorer1.showDetails();
explorer1.restoreEnergy(10);
console.log("Updated Energy:", explorer1.energyLevel + "%");
console.log("\nExplorer 2");
explorer2.showDetails();
explorer2.restoreEnergy(25);
console.log("Updated Energy:", explorer2.energyLevel + "%");
