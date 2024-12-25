import React from 'react'

const EventProps = () => {
    const handleWelcomeUser = (user) => {
        alert(`Hey How are you ${user}`);
    }
    const handleHover = (user) => {
      alert(`Thanks for hoverin me ${user}`)
  }

  return (
    <>
          <WelcomeUser onButtonClick={() => handleWelcomeUser('Kalpesh')} onMouseEnter={() => handleHover('Talekar')} /> 
          
    </>
  )
}

const WelcomeUser = (props) => {
    const { onButtonClick, onMouseEnter} = props;
    const handleGreeting = () => {
        console.log(`Hey User Welcome`);
        props.onButtonClick();
    };
    return (
        <>
            <button onClick={onButtonClick}>Click here</button>
            <button onMouseEnter={onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
      </>  
    );
}

export default EventProps
