export default function Friend({ friend }) {
  
  // destructuring object 'friend' brought from 'Friends' component
    const { name, email } = friend; 
  return (
    <div className='box'> {/* css class */}

        {/* displaying data  */}
      <h3>Name:{name} </h3>    
      <p>Email: {email} </p>
    </div>
  );
}
