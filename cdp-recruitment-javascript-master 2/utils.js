const filter = (data, word) => {
  if (!data) {
    return [];
  }
  return data.reduce((acc, current) => {
    const people = current.people.reduce((peoples, currentPeople) => {
      const animals = currentPeople.animals.filter((animal) => animal.name.includes(word));
      
      if (animals.length) {
        return [...peoples, { ...currentPeople, animals }];
      }
      return peoples;
    }, []);

    if (people.length) {
      return [...acc, { ...current, people }];
    }

    return acc;
  }, []);
};

const count = (data) => {
    if (!data) {
        return [];
    }
  return data.map((country) => {
    country.people = country.people.map((people) => {
      const name = people.animals.length
        ? `${people.name} [${people.animals.length}]`
        : people.name;
      return { ...people, name };
    });

    const name = country.people.length
      ? `${country.name} [${country.people.length}]`
      : country.name;
    return { ...country, name };
  });
};

module.exports = {
  count,
  filter,
};
