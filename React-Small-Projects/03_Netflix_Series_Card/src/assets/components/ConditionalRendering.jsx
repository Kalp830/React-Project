import { useState } from "react";

/* eslint-disable react/prop-types */
const Item = ({ name, isPacked, togglePacked }) => {
  return (
    <li className="item" onClick={togglePacked} style={{ cursor: "pointer" }}>
      {name} {isPacked ? "✅" : "❌"}
    </li>
  );
};

const ConditionalRendering = () => {
  const [myList, setMyList] = useState([
    { name: "space suit", isPacked: false },
    { name: "Helmet with a golden leaf", isPacked: false },
    { name: "Photo of Tam", isPacked: false },
    { name: "Oxygen Pipe", isPacked: false },
    { name: "Space dog", isPacked: false },
  ]);

  const togglePacked = (index) => {
    const updatedList = myList.map((item, i) =>
      i === index ? { ...item, isPacked: !item.isPacked } : item
    );
    setMyList(updatedList);
  };

  return (
    <section>
      <h4 style={{ color: "#999" }}>My Todo List</h4>
      <li>
        {myList.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            isPacked={item.isPacked}
            togglePacked={() => togglePacked(index)}
          />
        ))}
      </li>
    </section>
  );
};

export default ConditionalRendering;

/*
Let's break down the `togglePacked` function into simple steps so that it's easy to understand.

### Purpose of `togglePacked`
The goal of the `togglePacked` function is to:
1. **Find the item that was clicked** (using the `index`).
2. **Toggle the `isPacked` value** for that item (change `true` to `false` or `false` to `true`).
3. **Update the state** (`myList`) with the new value.

Now let’s go step by step through the function.

---

### Function Code
```javascript
const togglePacked = (index) => {
  const updatedList = myList.map((item, i) =>
    i === index ? { ...item, isPacked: !item.isPacked } : item
  );
  setMyList(updatedList);
};
```

---

### Step-by-Step Explanation

#### 1. **Mapping Over the List**
```javascript
myList.map((item, i) => ...)
```
- `myList.map()` goes through each item in the `myList` array **one by one**.
- `item` represents the current object (e.g., `{ name: "space suit", isPacked: false }`).
- `i` represents the index of the current item (e.g., `0`, `1`, etc.).

#### 2. **Checking If the Current Item is the Clicked One**
```javascript
i === index
```
- `index` is the position of the item that was clicked.
- We compare `i` (the index of the current item in the loop) with `index`.
- If **`i === index`**, this is the item that was clicked.

#### 3. **Toggling `isPacked`**
```javascript
{ ...item, isPacked: !item.isPacked }
```
- If `i === index`, we create a **new object** for that item with its `isPacked` value toggled:
  - `...item`: This copies all the existing properties of the item (e.g., `name`).
  - `isPacked: !item.isPacked`: This changes `isPacked` to the opposite value:
    - If `isPacked` is `false`, `!item.isPacked` becomes `true`.
    - If `isPacked` is `true`, `!item.isPacked` becomes `false`.

#### 4. **Leaving Other Items Unchanged**
```javascript
: item
```
- For items that are **not** the clicked one (`i !== index`), we return them unchanged.

---

### Example Walkthrough
Suppose the list looks like this:
```javascript
myList = [
  { name: "space suit", isPacked: false },
  { name: "Helmet with a golden leaf", isPacked: false },
  { name: "Photo of Tam", isPacked: false }
];
```

If you click the second item (`index = 1`), this is how the code works:

#### 1. **Start Mapping Through `myList`**
```javascript
myList.map((item, i) => ...)
```
We process each item in the array:
- For `i = 0`: Compare `0 === 1` (false). Return the item unchanged.
- For `i = 1`: Compare `1 === 1` (true). Create a new object with `isPacked` toggled.
- For `i = 2`: Compare `2 === 1` (false). Return the item unchanged.

#### 2. **Toggling the Clicked Item**
For `i = 1`:
```javascript
{ ...item, isPacked: !item.isPacked }
```
- Original: `{ name: "Helmet with a golden leaf", isPacked: false }`
- Toggled: `{ name: "Helmet with a golden leaf", isPacked: true }`

#### 3. **Create the Updated List**
The final `updatedList` looks like this:
```javascript
updatedList = [
  { name: "space suit", isPacked: false },
  { name: "Helmet with a golden leaf", isPacked: true },
  { name: "Photo of Tam", isPacked: false }
];
```

---

### 5. **Updating the State**
Finally, `setMyList(updatedList)` updates the `myList` state with the new array. React re-renders the UI to show the updated list.

---

### Key Points to Remember:
1. **`map()` creates a new array** by applying a function to each item in the original array.
2. **Ternary operator (`? :`)** checks whether the current item is the clicked one:
   - If `i === index`: Create a new object with toggled `isPacked`.
   - Otherwise, return the item unchanged.
3. **`setMyList(updatedList)` updates the state** so that React re-renders the UI with the changes.

---

Let me know if this is clear or if you'd like further clarification!*/
