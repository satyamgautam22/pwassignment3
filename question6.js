async function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  
    const userResponse = await fetch(userUrl);
    const userDetails = await userResponse.json();
  
    const postsResponse = await fetch(postsUrl);
    const userPosts = await postsResponse.json();
  
    return {
      userDetails,
      userPosts
    };
  }
  
  // Example usage
  fetchUserDataAndPosts(1).then(data => console.log(data));
  