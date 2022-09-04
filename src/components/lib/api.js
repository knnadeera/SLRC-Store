const FIREBASE_DOMAIN = 'https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app';

export async function getAllParts() {
  const response = await fetch(`${FIREBASE_DOMAIN}/parts.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch parts.');
  }

  const transformedParts = [];

  for (const key in data) {
    const partObj = {
      id: key,
      ...data[key],
    };

    transformedParts.push(partObj);
  }

  return transformedParts;
}

export async function getSinglePart(partId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/parts/${partId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch part.');
  }

  const loadedPart = {
    id: partId,
    ...data,
  };

  return loadedPart;
}

export async function addPart(partData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/parts.json`, {
    method: 'POST',
    body: JSON.stringify(partData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create part.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.partId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(partId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${partId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
