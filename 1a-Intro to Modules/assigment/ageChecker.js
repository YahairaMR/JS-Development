// Declare the ageChecker function here:

const ageChecker = (age) => {
  if (age >= 0 && age < 18) {
    return "Child";
  } else if (age >= 18 && age <= 20) {
    return "Military-Age";
  } else if (age >= 21) {
    return "Alcohol-Age";
  } else {
    return "ageChecker error: unexpected input";
  }
};

// Export the ageChecker function here:
module.exports = ageChecker;
