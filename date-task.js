#!/usr/bin/env node

const moment = require('moment');

const yargs = require('yargs/yargs'); // Подключаем пакет

const { hideBin } = require('yargs/helpers'); // Берём нужную нам функцию

const argv = yargs(hideBin(process.argv)).argv; // Обрабатываем аргументы

if (argv._.length > 1) {
  console.log('Invalid command');
} else if (argv._.some((item) => item === 'current')) {
  processCurrentArg(argv);
} else if (argv._.some((item) => item === 'add')) {
  processAddArg(argv);
} else if (argv._.some((item) => item === 'sub')) {
  processSubArg(argv);
}

function processCurrentArg(argv) {
  const date = new Date();
  if (argv.y || argv.year) {
    console.log(date.getFullYear());
  } else if (argv.m || argv.month) {
    console.log(date.getMonth());
  } else if (argv.d || argv.date) {
    console.log(moment().format());
  } else {
    console.log('Invalid command')
  }
}

function processAddArg(argv) {
  let years = null;
  let months = null;
  let days = null;
  if (typeof argv.y === 'number') {
    years = argv.y;
  } else if (typeof argv.year === 'number') {
    years = argv.year;
  }
  if (typeof argv.m === 'number') {
    months = argv.m;
  } else if (typeof argv.month === 'number') {
    months = argv.month;
  }
  if (typeof argv.d === 'number') {
    days = argv.d;
  } else if (typeof argv.month === 'number') {
    days = argv.date;
  }
  if (years != null) {
    const date = moment().add(years, 'years');
    console.log(date.format());
  } else if (months != null) {
    const date = moment().add(months, 'months');
    console.log(date.format());
  } else if (days != null) {
    const date = moment().add(days, 'days');
    console.log(date.format());
  } else {
    console.log('Invalid command');
  }
}

function processSubArg(argv) {
  let years = null;
  let months = null;
  let days = null;
  if (typeof argv.y === 'number') {
    years = argv.y;
  } else if (typeof argv.year === 'number') {
    years = argv.year;
  }
  if (typeof argv.m === 'number') {
    months = argv.m;
  } else if (typeof argv.month === 'number') {
    months = argv.month;
  }
  if (typeof argv.d === 'number') {
    days = argv.d;
  } else if (typeof argv.month === 'number') {
    days = argv.date;
  }
  if (years != null) {
    const date = moment().subtract(years, 'years');
    console.log(date.format());
  } else if (months != null) {
    const date = moment().subtract(months, 'months');
    console.log(date.format());
  } else if (days != null) {
    const date = moment().subtract(days, 'days');
    console.log(date.format());
  } else {
    console.log('Invalid command');
  }
}
