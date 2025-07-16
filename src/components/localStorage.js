//just tried localStorage instead of redux

export const setItemWithExpiry = (key, value) => {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + 60 * 60000, // Convert minutes to milliseconds
    };
    localStorage.setItem(key, JSON.stringify(item));
}

export const getItemWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    // If the item doesn't exist, return null
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    console.log("now:", now.getTime(), "item:", item.expiry);

    // Check if the item has expired
    if (now.getTime() > item.expiry) {
        // Remove the item from storage
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

