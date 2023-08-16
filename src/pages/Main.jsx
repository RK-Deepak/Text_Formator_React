import React, { useState } from 'react'
import Button from '../components/Button';





export default function Main(props) {

    let mystyle=props.mystyle;
    let setmystyle=props.mystyle;
    let showAlert=props.showAlert;

     
         const [text,settext]=useState("");

          function textchanger(e)
          {
            settext(e.target.value);
            
          }
        
          function toUppercase(e)
          {
                    settext(text.toUpperCase());
                    if(text!=="")
         {
          showAlert("Converted to Uppercase","Success");
         }
                   
                    
          }
          function toLowercase(e)
          {
                    settext(text.toLowerCase());
                    if(text!=="")
                    {
                      showAlert("Converted to Lowercase","Success");
                    }
                    
                    
          }
          function cleartext(e)
          {
                    settext("");
                    if(text!=="")
                    {
                      showAlert("Text Area Cleared","Success");
                    }
                    
          }
          function copyclip()
          {
                   
                    navigator.clipboard.writeText(text);
                    if(text!=="")
                    {
                      showAlert("Copied to Clipboard","Success");
                    }
                   
          }
          function removeapsace()
          {
            // settext(text.replaceAll(/\s/g,' '));
            // text.split(/[ ]+/): This part splits the input text into an array of substrings using a regular expression /[ ]+/. This regular expression matches one or more spaces. So, it's splitting the text wherever it finds one or more consecutive spaces.
            settext(text.split(/[ ]+/).join(" "));
            if(text!=="")
            {
              showAlert("Extra Space Removed","Success");
            }
           
          }
   
          

  return (
    <div>
      <div className='flex flex-col items-center w-[90%] max-w-[960px] mx-auto gap-2' >
              <textarea cols="20" rows="10" className='border-2 border-slate-800 w-full mx-auto my-2 p-2 '  value={text} onChange={textchanger} placeholder='Enter ur message' style={{color:mystyle.color==="white"?'slateblue':'slategrey'}}/>
              <div className='flex lg:flex-row flex-col gap-2 lg:justify-start self-start items-start ' >
                 <Button name={`Convert to Uppercase`}  func={toUppercase} />
                 <Button name={`Convert to Lowercase`}  func={toLowercase}/>
                 <Button name={`Clear Text`}  func={cleartext}/>
                 <Button name={`Copy Text`}  func={copyclip}/>
                 <Button name={`Remove Extra Space`}  func={removeapsace}/>
            
            


              </div>
              <p className='font-bold text-sm self-start'>
             
             {

             
               `The no of words are ${text.split(/\s+/).filter((s)=>s!=="").length} and characters are ${text.length}(space included)`

             }
                
              
           
              </p>
              <p className='font-bold text-sm self-start'>Time take to read the text is {0.008 * text.split(/\s+/).filter((s)=>s!=="").length}</p>
            
              <p className='font-bold text-sm self-start'>Preview Text:</p>
              <p className='text-sm self-start text-start'>{text}</p>
              </div>
              
              
      </div>
      
   
  )
}
