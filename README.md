### Task: Build a Simple React Counter App Using Vite  


### Objective  
Create a basic React application using **Vite** that includes a counter functionality. The app will allow users to increment, decrement, and reset the counter value.


### Instructions  

1. **Setup the React Project with Vite**  
   - Open your terminal and run the following commands to create a React project using Vite:  
     ```bash
     npm create vite@latest counter-app --template react
     cd counter-app
     npm install
     npm run dev
     ```  
   - This will set up a React project named `counter-app`.  
---

2. **Modify the Default Project**  

#### Step 1: Clean Up the Project  
- Open the project folder in your code editor.  
- Delete unnecessary files like `App.css` or any placeholder content in `App.jsx` and `main.jsx`.  

---

#### Step 2: Build the Counter Component  

- In `App.jsx`, create a functional component with the following features:  

1. **Counter State**: Use the `useState` hook to manage the counter value.  
2. **Buttons**: Add buttons to:  
   - Increment the counter (`+`)  
   - Decrement the counter (`-`)  
   - Reset the counter to zero (`Reset`).  
3. **Display Counter**: Show the current value of the counter on the screen.  

---

#### Example Code: `App.jsx`  
```jsx
import { useState } from "react";

function App() {
  // State to hold the counter value
  const [count, setCount] = useState(0);

  // Handlers for the buttons
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter App</h1>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={increment} style={{ margin: "5px", padding: "10px" }}>
          +
        </button>
        <button onClick={decrement} style={{ margin: "5px", padding: "10px" }}>
          -
        </button>
        <button onClick={reset} style={{ margin: "5px", padding: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
```

---

#### Step 3: Run the Application  
- Run the app in your browser by running the following command:  
   ```bash
   npm run dev
   ```  
- Open the browser at the provided URL (e.g., `http://localhost:5173`).  

---

### Expected Behavior  
1. The app displays the current counter value, starting at **0**.  
2. Clicking the **`+`** button increases the counter by 1.  
3. Clicking the **`-`** button decreases the counter by 1.  
4. Clicking the **Reset** button sets the counter back to **0**.  
 

Let me know if you need further clarifications or additional challenges! 🚀



## Formart on setting up PR

### **Pull Request Documentation Template**

#### **Title**  
Keep it concise but descriptive.  
Example: `Fix: Optimize API response time for /getUsers endpoint`

---

### **Description**  
Provide a clear and thorough explanation of the PR.  

- **What does this PR do?**  
  Briefly explain the purpose of this PR.  

- **Why is it needed?**  
  Mention the problem or feature this PR addresses.  

- **How was it implemented?**  
  Outline the approach or changes made to achieve the result.

- **Any dependencies?**  
  Mention if this PR depends on other PRs, libraries, or services.

---

### **Type of Change**  
Tick the relevant options:  

- [ ] Bug Fix  
- [ ] Feature  
- [ ] Refactor  
- [ ] Documentation Update  
- [ ] Performance Improvement  
- [ ] Test Addition/Update  
- [ ] CI/CD  

---

### **Screenshots (if applicable)**  
Provide screenshots or GIFs for UI changes.  


### **Checklist**  
Ensure all checks are met before submitting the PR:  

- [ ] My code follows the project's coding style.  
- [ ] I have tested the code thoroughly.  
- [ ] I have updated related documentation.  
- [ ] All tests are passing.  
- [ ] No linting issues.  
- [ ] PR has a descriptive title and thorough description.  

---


### **Additional Notes**  
Any additional context or notes relevant to the PR.  



