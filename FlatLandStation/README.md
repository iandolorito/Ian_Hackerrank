# FLATLAND SPACE STATIONS

- Explanation  
The function flatlandSpaceStations(n, c) works out how far the farthest city is from its nearest space station. For each city, it checks the distance to all the space stations and takes the closest one. Then it keeps track of the biggest of these closest distances. In the end, it returns that number, which shows the city that is farthest away from a space station.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(flatlandSpaceStations(5, [0, 4])); // Output: 2  
console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5])); // Output: 0  
or input any number of cities(n) and space(c) station locations you want