import React from 'react';

function Test({posts}) {
  return <div>
    {console.log('posts: ', posts)}
  </div>;
}
export async function getStaticProps() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await res.json();
    // posts = 
        
    //     {
    //       "userId": 10,
    //       "id": 99,
    //       "title": "temporibus sit alias delectus eligendi possimus magni",
    //       "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
    //     }

    axios.get("https://jsonplaceholder.typicode.com/posts").then(res.json).then(res=>{
        const posts = res.data
    }).catch(err=>console.log(err))
        
    return {
      props: {
          posts
      }
    };
}


export default Test;
// import { useEffect , useState } from "react";
// const Test = () => {


//     const [posts, setPosts] = useState([]);
//      useEffect(() => {
//        const fetchData = async () => {
//          const res = await fetch(
//         "https://jsonplaceholder.typicode.com/posts");
//          const posts = await res.json();
//          setPosts(posts);
//        };
//        fetchData();
//      })

//      return(<>
//         {console.log('posts')}
     
//      </>)}

// export default Test