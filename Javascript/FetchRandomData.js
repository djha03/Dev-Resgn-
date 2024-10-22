

// Fetch data using fetch API and handle promises
fetch("https://picsum.photos/v2/list")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })

  .then(data => {
    data.map((a) => {
      let authorName = a.author;  
      console.log(`the answer will be: ${authorName}`);
    });
  })
  
  .catch(error => {
    console.error('Error fetching data:', error);
    
  });
