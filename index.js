const express = require('express');
const mongoose = require('mongoose');

const port = 3000;

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://shamil:1234@cluster0.ch1gg.mongodb.net/comand_project")
    .then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(port, () => {
    console.log('Go, Johny, Go');
})