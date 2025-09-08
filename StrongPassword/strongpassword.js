function minimumNumber(n, password) {
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";

    let upper = 0, lower = 0, num = 0, special = 0;

    for (let i = 0; i < n; i++) {
        let char = password[i];

        if (upper_case.includes(char)) {
            upper = 1;
        } else if (lower_case.includes(char)) {
            lower = 1;
        } else if (numbers.includes(char)) {
            num = 1;
        } else if (special_characters.includes(char)) {
            special = 1;
        }
    }

    let count = (1 - upper) + (1 - lower) + (1 - num) + (1 - special);

    return Math.max(count, 6 - n);
}
