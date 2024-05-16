// import Counter from "./features/counter/Counter";

import AddPostForm from "./features/post/AddPostForm";
import PostList from "./features/post/PostList";


function App() {
  return (
  
   
  
      <div className="border w-[500px] mx-auto p-8 space-x-2 bg-green-900">
      {/* <Counter /> */}
   <div className="space-y-4"> 
      <AddPostForm />
     
      </div>


     <div className="space-y-4 mt-4">
     <PostList />
     </div>

    

      </div>
  );
}

export default App;
