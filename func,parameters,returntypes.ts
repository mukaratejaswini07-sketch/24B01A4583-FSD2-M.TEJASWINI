function calculateBudget(days: number, costPerDay: number): number {
    return days * costPerDay;
}

let totalBudget = calculateBudget(30, 5000);

console.log("Total Production Budget:", totalBudget, "dollars");

// Function with Default Parameters

function releaseMovie(movieName: string, platform: string = "Cinema"): string {
    return `Movie ${movieName} is releasing on ${platform}.`;
}

console.log(releaseMovie("Adventure-Life"));
console.log(releaseMovie("Mystery-World", "Streaming Service"));


// Function with Optional Parameters

function actorProfile(name: string, role?: string): string {
    if (role) {
        return `${name} is playing the role of ${role}.`;
    }
    return `${name} is an actor.`;
}

console.log(actorProfile("Min Jae"));
console.log(actorProfile("Soo Jin", "Lead Actor"));


// Function with Rest Parameters

function collectReviews(...reviews: string[]): void {
    console.log("Collected Reviews:");

    for (let review of reviews) {
        console.log(review);
    }
}

collectReviews("Amazing Story", "Great Acting", "Beautiful Scenes", "Excellent Music");


// Testing the Experiment

console.log("Budget Needed:", calculateBudget(45, 7000));
console.log(releaseMovie("The Journey"));
console.log(releaseMovie("Hidden Truth", "Online Platform"));
console.log(actorProfile("Rohan"));
console.log(actorProfile("Anaya", "Director"));
collectReviews("Good", "Excellent", "Outstanding");