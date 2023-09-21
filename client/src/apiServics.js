const url = "http://localhost:3005";

export async function getItems() {
  const response = await fetch(`${url}/events`);
  const data = await response.json();
  return data;
}

export async function addItem(item) {
  console.log('api post',item)
  try {
    const response = await fetch(`${url}/items`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //TODO change to fit my app
      //body: JSON.stringify({title:topic.title, date: topic.date, venue:topic.venue}),
      body: JSON.stringify({itemName:item.itemName}),
    });
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log(error)
    
  }
}