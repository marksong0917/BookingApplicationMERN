import React, { Fragment } from 'react'


function Pricing () {
    return (
        <body>
        
        <Fragment  class="img1"  >

 <h1 >Choose a plan that fits YOUR NEEDS </h1><br/>
            <div class="flex-container">


            <div class="flex-child green">
                                
                                <h2>Small</h2>
                    <h3>$5/Month</h3>
                    <p>Max 3 User <br />
                    1G of Cloud Storage
                        Calendar Sync 

                    </p>
                        {/* TO DO HERE add css buttonInfo make it .......  */}
                        <button class="buttoninfo" href="# " >More Info </button>
                            </div>
                            
                            <div class="flex-child blue">
                                
                                <h2>Medium</h2>
                    <h3>$10/Month</h3>
                    <p>Max 6 User <br />
                    5G of Cloud Storage
                        Calendar Sync 
                        Data Encrption
                        24/7 IT Support 
                        
                    </p>
                        {/* TO DO HERE add css buttonInfo make it .......  */}
                        <button class="buttoninfo" href="# " >More Info </button>
                </div>
                </div> 
            </Fragment> 
                    </body>
    );
};

export default Pricing;