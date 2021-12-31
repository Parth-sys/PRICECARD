//import { Children } from "react";






export function Plans(){
    const plan=[
        { name:"FREE", 
          rate:"0",
          features:[
            "Single User",
            "5GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "Unlimited Private Projects",
            "Dedicated Phone Support",
            "Free Subdomain",
            "Monthly Status Reports",
        ]
    
    },
        
    {
      name:"PLUS",
        rate:"49",
        features:[
          "5 Users",
          "50GB Storage",
          "Unlimited Public Projects",
          "Community Access",
          "Unlimited Private Projects",
          "Dedicated Phone Support",
          "Free Subdomain",
          "Monthly Status Reports",
        ]
      
      
      },
        {name:"PRO",
        rate:"99",
        features:[
          "Unlimited Users",
          "150GB Storage",
          "Unlimited Public Projects",
          "Community Access",
          "Unlimited Private Projects",
          "Dedicated Phone Support",
         " Unlimited Free Subdomains",
          "Monthly Status Reports"
        ]
         
      
      
      },
    ]
    //console.log(plan.name)
  return(
      <div className="PRICE">

          {plan.map((plan,i)=>
          ( 
          <Pricetemp name={plan.name} rate={plan.rate} features={plan.features}  key={i}/>
           
              ))
         
          }
      </div>
  )
  }




   function Pricetemp(props) {
    
  
  return(
        <div  className="div1" style={{display:"inline-flex" ,backgroundColor:"dodgerblue",  padding:"40px", }}> 
      <div    className="pricediv"      style={{backgroundColor:"white",borderRadius:30,width:"250px", padding:"10px"
    }}>
         <h5 style={{color:"grey",paddingLeft:"100px" }}> {props.name}</h5>
         <p className="price">${props.rate}<span className="duration"> /month</span></p>
         
          <ul className=" featurelist" >
         {props.features.map((f)=>(<li> {f}</li>))}
      </ul>
      <button className="button" >Button</button>
      </div>
      </div>
      
    
   
  );



}
