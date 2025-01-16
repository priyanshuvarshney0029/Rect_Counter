
import './App.css'

function App() {
   var image="https://images.pexels.com/photos/8044842/pexels-photo-8044842.jpeg?auto=compress&cs=tinysrgb&w=600"
   return(
      <ShowImage name="priyanshu" age="19" img={image}></ShowImage>
   )
}
// function ShowImage(props){
//   return(
//     <div>
//     <h1>Images</h1>
//     <img src={props.img} alt="" />
//     <h1>{props.name}</h1>
//     <h1>{props.age}</h1>
//  </div>
//   )

// }
function ShowImage({name,age,img}){
    return(
      <div>
         <h1>Images</h1>
          <h1>{name}</h1>
          <h1>{age}</h1>
          <img src={img} alt="" />
      </div>
    )
}
export default App
