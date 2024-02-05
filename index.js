
function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
    return (Math.abs(street - 42)) * 264;
}

function distanceTravelledInFeet(street, street2) {
    return (Math.abs(street - street2)) * 264
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = ((Math.abs(start - destination))*264);
    if (distanceInFeet>2500) {
        return 'cannot travel that far';
    } else if (distanceInFeet>2000) {
        return 25;
    } else if (distanceInFeet>400) {
        let cost = ((0.02 * distanceInFeet) - (0.02*400));
        return Number(cost.toFixed(2));
    } else if (distanceInFeet<=400){
        return 0;
    }
}