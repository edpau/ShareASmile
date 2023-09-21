const url = "http://localhost:3005";

export async function getItems() {
  const response = await fetch(`${url}/events`);
  const data = await response.json();
  return data;
}

export async function addItem(topic) {
  const response = await fetch(`${url}/events`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //TODO change to fit my app
    body: JSON.stringify({title:topic.title, date: topic.date, venue:topic.venue}),
    //body: JSON.stringify({title:topic.title}),
  });
  const data = await response.json();
  return data;
}