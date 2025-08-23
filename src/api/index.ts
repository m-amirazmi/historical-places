export const fetchPlaces = async () => {
  const res = await fetch("https://example.com/places");
  return res.json();
};

export const fetchPlaceDetailApi = async (id: string) => {
  const res = await fetch(`https://example.com/places/${id}`);
  return res.json();
};

export const updatePlaceVisitedApi = async (id: string) => {
  const res = await fetch(`https://example.com/places/${id}/visited`, {
    method: "POST",
  });
  return res.json();
};
