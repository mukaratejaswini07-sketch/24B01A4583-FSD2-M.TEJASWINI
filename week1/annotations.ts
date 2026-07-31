let restaurantName: string = "Ocean Breeze Cafe!";
let customerRating: number = 8;
let isTasty: boolean = true;

// Function parameter and Return Type Annotations
function getReview(placeName: string, reviewStars: number): string {
    return `${restaurantName} serves amazing dishes with a rating of ${customerRating}.`;
}

// Array Annotations
let dishesList: string[] = [
    "Italian pasta",
    "Mexican tacos",
    "chocolate brownie",
    "grilled chicken"
];

// Using the Annotated variables and functions
console.log("Restaurant Name:", restaurantName);
console.log("Rating:", customerRating);
console.log("Is Tasty:", isTasty);
console.log(getReview(restaurantName, customerRating));
console.log("Dishes List:");

for (let dish of dishesList) {
    console.log(dish);
}