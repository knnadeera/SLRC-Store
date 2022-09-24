const userId = localStorage.getItem("localId");

const FIREBASE_ORDERS_DOMAIN =
  `https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${userId}`;



export async function getMyOrders() {
  const response = await fetch(`${FIREBASE_ORDERS_DOMAIN}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch your orders.");
  }

  const loadedOrders = [];

  for (const key in data) {
    const orderObj = {
      id: key,
      ...data[key],
    };
    loadedOrders.push(orderObj);
  }

  console.log("a", data);
  return loadedOrders;
}

export async function getOrderdParts(partId) {
  const response = await fetch(
    `${FIREBASE_ORDERS_DOMAIN}/${partId}.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch part.");
  }

  const loadedIncludes = [...data];
  
  console.log("ab", data);
  return loadedIncludes;
}