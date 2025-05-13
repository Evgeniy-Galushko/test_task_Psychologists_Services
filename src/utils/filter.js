export function filteredData(dbDoctors, filter) {
  if (filter === "alphabetically") {
    console.log(dbDoctors[2].name.slice(4));
    const sorted = dbDoctors.toSorted((firstDoctor, secondDoctor) =>
      firstDoctor.name.slice(4).localeCompare(secondDoctor.name.slice(4))
    );
    return sorted;
  }
  if (filter === "inReverseOrder") {
    const sorted = dbDoctors.toSorted((firstDoctor, secondDoctor) =>
      secondDoctor.name.slice(4).localeCompare(firstDoctor.name.slice(4))
    );
    return sorted;
  }
  if (filter === "fromALowerPrice") {
    const sorted = dbDoctors.toSorted(
      (firstDoctor, secondDoctor) =>
        secondDoctor.price_per_hour - firstDoctor.price_per_hour
    );
    return sorted;
  }
  if (filter === "fromHigherPrice") {
    const sorted = dbDoctors.toSorted(
      (firstDoctor, secondDoctor) =>
        firstDoctor.price_per_hour - secondDoctor.price_per_hour
    );
    return sorted;
  }
  if (filter === "Popular") {
    const sorted = dbDoctors.toSorted(
      (firstDoctor, secondDoctor) => secondDoctor.rating - firstDoctor.rating
    );
    return sorted;
  }
  if (filter === "NotPopular") {
    const sorted = dbDoctors.toSorted(
      (firstDoctor, secondDoctor) => firstDoctor.rating - secondDoctor.rating
    );
    return sorted;
  }
  if (filter === "ShowAll") {
    return dbDoctors;
  }
}
