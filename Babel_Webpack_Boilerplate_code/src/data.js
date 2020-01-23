// responsible for manipulating data
const users = [{
    name: 'mario',
    premium: true
  },
  {
    name: 'endra',
    premium: true
  },
  {
    name: 'santh',
    premium: false
  },
  {
    name: 'raj',
    premium: false
  },
  {
    name: 'ganesh',
    premium: true
  }
];

const getPremUsers = (users) => {
  return users.filter(user => user.premium);
};


export {
  getPremUsers,
  users as
  default
};