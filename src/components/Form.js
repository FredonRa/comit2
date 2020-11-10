import React, {useState} from 'react';

const Section = () => {
    
    const [text, setText] = useState('')

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <section>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Click</button>
            <p>el nombre es: {text}</p>
        </section>
     );
     
}
 
export default Section;
