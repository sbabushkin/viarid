import * as crypto from 'crypto';

const date = new Date().toISOString();

export const userSeed = [
  {
    id: '97e1f8ed-e9f0-459d-8c69-719ffa8fe7fb',
    first_name: 'Semyon',
    last_name: 'Babushkin',
    middle_name: '',
    login: 'semyon.babushkin',
    email: 'semyon.babushkin@viar.id',
    phone: '+629670635441',
    status: 'active',
    created: date,
    updated: date,
    salt: crypto.randomBytes(16).toString('hex'),
  },
  {
    id: '98e1f8ed-e9f0-459d-8c69-719ffa8fe7fb',
    first_name: 'Dmitry',
    last_name: 'Peperon',
    middle_name: '',
    login: 'dmitry.peperon',
    email: 'dmitry.peperon@viar.id',
    phone: '+629670635442',
    status: 'active',
    created: date,
    updated: date,
    salt: crypto.randomBytes(16).toString('hex'),
  },
  {
    id: '99e1f8ed-e9f0-459d-8c69-719ffa8fe7fb',
    first_name: 'Ivan',
    last_name: 'Shamrai',
    middle_name: '',
    login: 'ivan.shamrai',
    email: 'ivan.shamrai@viar.id',
    phone: '+629670635443',
    status: 'active',
    created: date,
    updated: date,
    salt: crypto.randomBytes(16).toString('hex'),
  },
  {
    id: '96e1f8ed-e9f0-459d-8c69-719ffa8fe7fb',
    first_name: 'Roman',
    last_name: 'Bogach',
    middle_name: '',
    login: 'roman.bogach',
    email: 'roman.bogach@viar.id',
    phone: '+629670635444',
    status: 'active',
    created: date,
    updated: date,
    salt: crypto.randomBytes(16).toString('hex'),
  }
];
