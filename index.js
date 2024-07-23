// №1
const bankAccount = {
    ownerName: 'Denchik',
    accountNumber: +380986493612,
    balance: 600,
    deposit(money) {
        return this.balance += money
    },
    withdraw(money) {
        return this.balance -= money
    }
}
const qestionDep = confirm('Бажаєте поповнити рахунок?');
if (qestionDep === true) {
    bankAccount.balance += Number(prompt('На скільки грошей бажаєте поповнити?'))
} else {
    const qestionWithdraw = confirm('Можливо бажаєте зняти гроші?')
    if (qestionWithdraw === true) {
        bankAccount.balance -= Number(prompt('Скільки грошей бажаєте зняти?'))
    }
}
alert(`Ваш баланс становить - ${bankAccount.balance}`);

// №2
const degrees = Number(prompt('Яка температура повітря?'));
const weather = {
    temperature: degrees,
    humidity: 65,
    windSpeed: 16,
    determineHowHighTheTemperatureIs () {
        if (this.temperature >= 0) {
            alert('Температура вижча або дорівнює 0 градусів Цельсія')
        } else {
            alert('Температура нижче 0 градусів Цельсія')
        }
    }
}
weather.determineHowHighTheTemperatureIs()

// №3
const user = {
    name: "Віка",
    email: null,
    password: null,
    login() {
        const email = prompt("Введіть свій email:");
        const password = prompt("Введіть свій пароль:");
        if (
            password.length > 4 &&
            password.length < 16 &&
            email.includes("@") === true
        ) {
            this.email = email;
            this.password = password;
        } else alert("Ви неправильно ввели(");
    },
};
user.login();
console.log(user)

// №4
const movie = {
    title: "Batman",
    director: "Matt Reeves",
    year: 1939,
    rating: 8,
    checkRating() {
        if (this.rating >= 8) {
            alert('Тепер колір тайтлу зелений :)')
        }
    },
};
console.log(movie)
movie.checkRating()