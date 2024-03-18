import app from "./app";

// ADD CONNECTION TO MONGODB 


// START THE SERVER
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
