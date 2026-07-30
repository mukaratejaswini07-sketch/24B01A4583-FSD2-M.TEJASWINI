"use strict";
let restaurantName = "Ocean Breeze Cafe!";
let customerRating = 8;
let isTasty = true;
// Function parameter and Return Type Annotations
function getReview(placeName, reviewStars) {
    return `${restaurantName} serves amazing dishes with a rating of ${customerRating}.`;
}
// Array Annotations
let dishesList = [
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
