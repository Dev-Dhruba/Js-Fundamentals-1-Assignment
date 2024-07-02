let typeOfPakage = "dhruba";

switch (typeOfPakage){
    case "standard":
        console.log("Your order might take 3-5 days to get delivered");
        break;

    case "express":
        console.log("Your order might take 1-2 days to get delivered");
        break;

    case "overnight":
        console.log("Your order will be delivered the next day");
        break;

    default:
        console.log("Please enter a defined delivery type");
        break;
}


