

function isSameObject(obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1);
  const props2 = Object.getOwnPropertyNames(obj2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i++) { 
    const property = props1[i];

    if (obj1[property] !== obj2[property]) {
      if (
        typeof obj1[property] === 'object' &&
        typeof obj2[property] === 'object'
      ) {
        return isSameObject(obj1[property], obj2[property]);
      } else {
        return false;
      }
    }
  }
  return true;
}

const obj1 = {
  name: {
    first: 'me',
    last: [1, 2, { test: false, go: '233' }]
  },
  status: 'alive'
};

const obj2 = {
  name: {
    last: [1, 2, { go: '233', test: false }],
    first: 'me'
  },
  status: 'alive'
};

console.log(isSameObject(obj1, obj2));
