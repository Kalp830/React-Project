const Profile = () =>{
    return(
        <>
        <h1>Profile Card Challenge</h1>
        <ProfileCard 
        name={"Alice"}
        age={32}
        greeting={  
        <> <b>Hi Alice, have a wonderful day!</b></>
        }
        >
       <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
        </ProfileCard>
        </>
    );
}

export const ProfileCard = ({name, age, greeting, children}) =>{
    return(
        <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
        </>
    );
}
export default Profile;