const url = "http://localhost:3005";

export async function getItems() {
  const response = await fetch(`${url}/items`);
  const data = await response.json();
  return data;
}

export async function getOneItem(itemId) {
  try {
  
    const response = await fetch(`${url}/items/${itemId}`)

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log(error)
  }
}



//TODO make it accept id 
export async function getUserItems() {
  const response = await fetch(`${url}/UserItems`);
  const data = await response.json();
  return data;
}

export async function addItem(item) {
  try {
    const response = await fetch(`${url}/items`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //TODO change to fit my app
      //body: JSON.stringify({title:topic.title, date: topic.date, venue:topic.venue}),
     body: JSON.stringify({itemName:item.itemName, lister: item.lister, imageId: item.imageId, description: item.description, shareMethod: item.shareMethod, category: item.category}),
    // body: JSON.stringify({itemName:item.itemName, lister: item.lister, imageId: item.imageId}),
    });
    const data = await response.json();
    console.log(data, "api data")
    return data;
    
  } catch (error) {
    console.log(error)
    
  }
}