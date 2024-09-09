


/* globals jQuery, $, waitForKeyElements */


/* Global Vars*/

const timer = ms => new Promise(res => setTimeout(res, ms))

/*____________*/





var resp = new String
var box1 = new String
var box2 = new String
var Base_LikelyBase = new String
var Base_BackupBase = new String
var Base_Justify = new String
var Base_Override = new String
var table
var DataArray = new Array



var baseReportFindGuardRails = `"Here are the Data Points for the Sales Report Base

""[Date Point Cannot Filter? Company Name FALSE Ls Account ID FALSE City FALSE State FALSE Street Address 1 FALSE Street Address 2 FALSE Zip FALSE Archived (Yes / No) FALSE Company FALSE Country FALSE Customer ID FALSE Date of birth FALSE Email FALSE First Name FALSE Full Name FALSE Last Name FALSE Home Phone FALSE Mobile Phone FALSE Work Phone FALSE Title FALSE Type FALSE Website FALSE Category (Filter) FALSE Quantity on Hand (Filter) FALSE Archived (Yes / No) FALSE Brand FALSE Category TRUE Top Level Category FALSE Avg Cost FALSE Default Cost FALSE Default Vendor FALSE Description FALSE Custom SKU FALSE Default Vendor ID FALSE EAN FALSE Manufacturer SKU FALSE System ID FALSE UPC FALSE Item Type FALSE Attribute 1 FALSE Attribute 2 FALSE Attribute 3 FALSE Manufacturer SKU FALSE Matrix FALSE Matrix Tag FALSE Price FALSE Single Tag FALSE # of Items TRUE Avg Default Price TRUE Quantity on Hand TRUE Quantity on Order TRUE Desired Inventory Level TRUE Reorder Point TRUE Store FALSE Channel FALSE Date FALSE Day of Month (Not Supported, use Date) FALSE Day of Week (Not Supported, use Date) FALSE Hour of Day (Not Supported, use Date) FALSE Month (Not Supported, use Date) FALSE Month Name FALSE Quarter of Year (Not Supported, use Date) FALSE Time (Not Supported, use Date) FALSE Week (Not Supported, use Date) FALSE Week of Year FALSE Year (Not Supported, use Date) FALSE Employee FALSE Employee Hours FALSE Employee Role FALSE Register FALSE Sale ID FALSE # of Sales TRUE Average Sale Quantity TRUE Avg Basket Size TRUE Avg Basket Value TRUE Margin (Filter) FALSE Quantity Sold (Filter) FALSE Total (Filter) FALSE Discount Name FALSE Employee FALSE Employee Hours FALSE Employee Role FALSE Sale Line ID FALSE Tax Class FALSE # of Sale Lines TRUE Avg Discount TRUE Avg Quantity TRUE Avg Unit Price TRUE Margin TRUE Profit TRUE Total TRUE Cost TRUE Quantity Sold TRUE Subtotal TRUE]""

Here are the Data Points for the Items Report Base

""[Date Point Cannot Filter? Company Name FALSE Ls Account ID FALSE Average Lead Time FALSE Forecast Period TRUE Trailing Sales Period TRUE Days of Cover TRUE Dynamic Reorder Level TRUE Dynamic Reorder Point TRUE Quantity to Order TRUE Trailing Average Daily Sales TRUE Category FALSE Include Archived FALSE Brand FALSE Category TRUE Top Level Category TRUE Avg Cost FALSE Default Cost FALSE Default Vendor FALSE Description FALSE Custom SKU FALSE Default Vendor ID FALSE EAN FALSE Manufacturer SKU FALSE System ID FALSE UPC FALSE Item Type FALSE Attribute 1 FALSE Attribute 2 FALSE Attribute 3 FALSE Manufacturer SKU FALSE Matrix FALSE Matrix Tag FALSE Single Tag FALSE Tax Class FALSE # of Items TRUE Days Since Counted FALSE Days Since Received FALSE Days Since Sold FALSE Days To Sell Out FALSE Last Received Date FALSE Last Sold Date FALSE Quantity on Order FALSE Quantity to Order FALSE Quantity on Hand FALSE Desired Inventory Level FALSE Reorder Point FALSE Lifetime Quantity Sold FALSE Lifetime Sales FALSE Tag Collection FALSE 365 Day GMROI FALSE 365 Day Turns FALSE Last Year GMROI FALSE Last Year Turns FALSE Date (first_received_date_date) FALSE Is Dusty (Yes / No) FALSE Is Included (Yes / No) FALSE On Order (Yes / No) FALSE On Transfer (Yes / No) FALSE Price FALSE Days Since Counted TRUE Days Since First Received TRUE Days Since Received TRUE Days Since Sold TRUE Days to Sell Out TRUE Avg Default Price TRUE 365 Day Avg Inventory TRUE Last Year Avg Inventory TRUE Quantity on Hand TRUE Total Cost TRUE Total Retail Value TRUE Cost on Order TRUE Lifetime Received Quantity TRUE Quantity on Order TRUE Desired Inventory Level TRUE Reorder Point TRUE Lifetime Quantity Sold TRUE Lifetime Sales TRUE 365 Day GMROI TRUE 365 Day Turns TRUE Last Month GMROI TRUE Last Month Turns TRUE Last Year GMROI TRUE Last Year Turns TRUE Days Since PO Received FALSE Days Since Transfer Received FALSE Store FALSE Days Since PO Received TRUE Days Since Transfer Received TRUE Completed Date FALSE Register FALSE # of Lines TRUE # of Sales TRUE Avg Basket Size TRUE Avg Discount Percent TRUE Avg Price TRUE Cost TRUE Margin TRUE Profit TRUE Quantity Sold TRUE Total TRUE Total Discounts TRUE]""

Here are the Data Points for the Tax Report Base

""[Date Point Cannot Filter? Company Name FALSE Ls Account ID FALSE City FALSE State FALSE Street Address 1 FALSE Street Address 2 FALSE Zip FALSE Country FALSE Full Name FALSE Type FALSE Store FALSE Channel FALSE Date FALSE Day of Month FALSE Day of Week FALSE Month FALSE Month Name FALSE Quarter of Year FALSE Week FALSE Week of Year FALSE Year FALSE Employee FALSE Register FALSE Sale ID FALSE Tax 1 Rate FALSE Tax 2 Rate FALSE Tax Name FALSE # of Sales TRUE Avg Basket Size TRUE Avg Basket Value TRUE Total Tax 1 TRUE Total Tax 2 TRUE Total Tax Paid TRUE Margin FALSE Quantity Sold FALSE Discount Name FALSE Is Layaway (Yes / No) FALSE Is Miscellaneous (Yes / No) FALSE Is Special Order (Yes / No) FALSE Is Taxed (Yes / No) FALSE Is Workorder (Yes / No) FALSE Tax Class FALSE Tax Class 1 Rate FALSE Tax Class 2 Rate FALSE # of Sale Lines TRUE Avg Discount TRUE Avg Quantity TRUE Avg Unit Price TRUE Margin TRUE Profit TRUE Cost TRUE Quantity Sold TRUE Subtotal TRUE Total Discount TRUE Total with Tax TRUE City FALSE State FALSE Street Address 1 FALSE Street Address 2 FALSE Zip FALSE Country FALSE]""

Here are the Data Points for the On Order Report Base

""[Company Name FALSE Ls Account ID FALSE Category FALSE Brand FALSE Category FALSE Top Level Category FALSE Custom SKU FALSE EAN FALSE Manufacturer SKU FALSE System ID FALSE UPC FALSE Attribute 1 FALSE Attribute 2 FALSE Attribute 3 FALSE Manufacturer SKU FALSE Matrix FALSE Price FALSE Quantity on Hand TRUE Receiving Shop FALSE Sending Shop FALSE Archived (Yes / No) FALSE Complete (Yes / No) FALSE Date FALSE Day of Month FALSE Day of Week FALSE Month FALSE Month Name FALSE Quarter of Year FALSE Week FALSE Week of Year FALSE Year FALSE Date FALSE On Order (Yes / No) FALSE Order ID FALSE Date FALSE Week of Year FALSE Year FALSE Date FALSE Day of Month FALSE Day of Week FALSE Month FALSE Month Name FALSE Quarter of Year FALSE Week FALSE Week of Year FALSE Year FALSE Transfer ID FALSE Type FALSE Vendor FALSE # of Items TRUE Cost of Ordered TRUE Cost of Received TRUE Order Discounts TRUE Original Order Quantity TRUE Quantity on Order TRUE Retail Value on Order TRUE Retail Value Received TRUE Total Received Quantity TRUE]""

Here are the Data Points for the Payments Report Base

""[Company Name FALSE Ls Account ID FALSE Full Name FALSE Type FALSE Store FALSE Channel FALSE Date FALSE Day of Month FALSE Day of Week FALSE Month FALSE Month Name FALSE Quarter of Year FALSE Week FALSE Week of Year FALSE Year FALSE Employee FALSE Register FALSE Sale ID FALSE # of Sales TRUE Avg Basket Size TRUE Avg Basket Value TRUE Margin FALSE Quantity Sold FALSE Discount Name FALSE Is Layaway (Yes / No) FALSE Is Miscellaneous (Yes / No) FALSE Is Special Order (Yes / No) FALSE Is Workorder (Yes / No) FALSE Tax Class FALSE # of Sale Lines TRUE Avg Discount TRUE Avg Quantity TRUE Avg Unit Price TRUE Margin TRUE Profit TRUE Cost TRUE Quantity Sold TRUE Payment Type FALSE Amount TRUE]""

Here are the Data Points for the Customers Report Base

""[Date Point Cannot Filter? Company Name FALSE Ls Account ID FALSE Days Between Purchases FALSE Days Since Last Purchase FALSE Historic Lifetime Value FALSE Address FALSE Date of birth FALSE Days Between Sales Tiered FALSE Email FALSE First Employee FALSE First Sale Date FALSE Is Repeat (Yes / No) FALSE First Name FALSE Full Name FALSE Last Name FALSE On Do Not Call List (Yes / No) FALSE On Do Not Email List (Yes / No) FALSE Phone Number FALSE Single Tag TRUE Status TRUE Type TRUE # of Customers FALSE Avg Lifetime Value FALSE Days Between Purchases FALSE Days Since Last Purchase FALSE Historic Lifetime Value FALSE Brand FALSE Category FALSE Top Level Category FALSE Avg Cost TRUE Default Vendor TRUE Description TRUE # of Items TRUE Store TRUE Date TRUE Day of Month TRUE Day of Week TRUE Month FALSE Month Name TRUE Quarter of Year FALSE Week FALSE Week of Year FALSE Year FALSE Register FALSE Sale ID FALSE # of Sales FALSE Avg Basket Value FALSE Total FALSE # of Sale Lines FALSE Avg Discount FALSE Avg Quantity FALSE Avg Unit Price FALSE Margin FALSE Profit FALSE Total FALSE Cost FALSE Quantity Sold FALSE]""

Here is a list of Overrides. This List will override any finds you make from here. ALWAYS RESPECT AND USE THE OVERRIDE TABLE.

[Report Base / Does Include / Doesnt Include (Forbidden Data Types) Customer / Customer, first employee with customer, items, Stores, sales / item metrics, employee information, item info

Items / Item details, aging details / customers, employees, payment types

On Order / Item, order, multi-shop, Ordered Date, Received Date / customer, sales

Payments / Customer, multi-shop, sale, employee, account receivable, accounts receivable / items, taxes

Sales / Customers, items, sales and sales dates / payments, taxes, or inventory for items that did not sell yet, incomplete Layaways, incomplete Special Orders, incomplete workorders, account receivable, accounts receivable

Tax / Customer, sale, taxes / item, payment method, item information, item info, sale lines

]

DO NOT MIX DATA POINTS FROM 1 REPORT TO ANOTHER. EACH REPORT EXCLUSIVELY CAN ONLY SEE WHAT IS LISTED UNDER THEM. SALES REPORT CANNOT SEE TAX RATES ONLY TAX CLASS. ANYTHING REFERING TO TAXES IS ALWAYS THE TAX REPORT, WITH THE SINGLE AND ONLY EXCEPTION BEING TAX CLASS.

Forbidden Table:

[ Special Orders do not appear on the Sales report unless its 100% complete,

Work Orders do not appear on the Sales report unless its 100% complete,

Layaways do not appear on the Sales report unless its 100% complete,

Deposits only appear on the Payments report,

Accounts Receivable is ALWAYS THE PAYMENTS BASE REPORT,

Account Receivable is ALWAYS THE PAYMENTS BASE REPORT,

THE SALES REPORT CANNOT SEE INCOMPLETE SALES, LAYAWAYS, WORKORDERS, SPECIAL ORDERS OR DEPOSITS,

The Sales report cannot report on items that have never been sold or involved in a sale,

The Sales report cannot see incomplete sales of any kind no matter what,

The Customers report cannot see Sales Details including Status,

The Customer report cannot see Workorders/Layaways/Special Orders at all,

The Tax report cannot see Item Information or Item Details at all,

The Tax Report can only see the Sale ID and it cannot see specific info about things on the sale,

There are no Notes of any kind on any report. Always ignore requests for notes,

No report can see Inventory Counts,

No report can see Shrinkage Reports,

No report can see Inventory Changes over a range,

No report can see Item or Customer ""Custom Fields"",

No Report can view the customers ""Deposits or Account Balance"",

No Report can view Gift Cards and their usage except the Payments report,

No Report can see shipping costs,

No report can see ""Lightspeed Payments Fees"",

No report can see cash register activity,

]

When you recieve a question, the first thing you will do is extract all the Data Points you can find. Then for each Base Report Type, find the Data Point that matches Data Point you found in the question. In the response below, sub out [Match%] with the list of Data Points you found that are exact matches with Data Points under that Report types Data Point Table. Then sub out [List out Data Points the question asked for] for the list of Data Points you extracted for each Report Base.

Then sub out [base] with the report base that would make the most sense to use in this case, you should typically pick the option that has the most matches and makes the most sense to use via context clues and the report base name. Make sure it does not conflict with the Override Table and Forbidden Table. Replace [base2] with your second best match.

The Override Table and Forbidden Table Table hold priority over all, even if you find a better match, but either of those 2 tables prevent or force another base report, you must obey the tables.

When you respond to a question, do it in the following json format:

"{ Base Reports: { Sales : [Match%], Items : [Match%], Tax : [Match%], On Order : [Match%], Payments : [Match%], Customers : [Match%] },

Extracted Data Points : [List out Data Points the question asked for]

Most Likely Report : [base] , Second Most Likely : [base2]

Justification : [reason]

Override : [IS/IS NOT], [reportbase]

Impossible/Incomplete : [yes/no]

}"

Substitute out [reason] with a justification for your findings. Always include this portion, even if blank. Make sure the justification does not conflict with the Override Table and SForbidden Table Table. Always provide a second option if you know the suggested report cannot provide all the requests. If the report ends up being impossible due to missing some Data Points, please make sure to state that, along with what you were unable to complete.

If there is an Override from the Override Table, substitute [reportbase] with the report in question. Replace [IS/IS NOT] with IS or IS NOT. Replace with IS if there is an Override or Consideration saying the report must be a specific base. Replace with IS NOT if you find a Forbidden Table or Override forbidding a report base to use a specific Data Point or type of Data.

If the question is asking for an impossible report based on the guidelines and Data Points + Base Reports ive given you, substitute [yes/no] with Yes. If the report in question can be 100% built with no missing data, substitute [yes/no] with No. You can also replace [yes/no] with Yes if there is anything on the Forbidden table that conflicts with the question.

ALWAYS RESPECT AND USE THE OVERRIDE TABLE AND THE FORBIDDEN TABLE. Refer to the Forbidden Table Table to make sure there are no conflicts that may take place. Make sure to always fill in the justification section. DO NOT MAKE STUFF UP. ONLY USE INFORMATION PROVIDED TO YOU. DO NOT MIX DATA POINTS FROM 1 REPORT TO ANOTHER."`




function Right(text, length) {
    return text.split("").reverse().join("").substring(0, text.length - length + 1).split("").reverse().join("");
}

//Gets the left most X characters from string.
function Left(text, length) {
    return text.substring(0, length);
}


function NewButton() {

    document.querySelector("body > #__next > div > div > div.css-1yeu6ln-Box-Flex.e1rqh3k81 > div.css-xkdgzs-Box-Flex.e1rqh3k81").addEventListener("click", Engine, false)

}




async function Engine(){
    console.log("Click Found")
    await timer(250)
    textFix()
    CleansetheUnholy()
}   


function textFix(){

    document.querySelector("body > div:nth-child(26) > div > div > div.css-16t8i6y-Container.etqmmgu0 > div.css-obt5hl-Content.etqmmgu1").innerText = "Generate Report"
    document.querySelector("body > div:nth-child(26) > div > div > div.css-1bkr611-ModalBody.egkbfm10 > p.fl-text.css-w9gp5e-Text.e4p1v731").innerText = "What report are they looking for?"
    document.querySelector("body > div:nth-child(26) > div > div > div.css-1bkr611-ModalBody.egkbfm10 > div:nth-child(3) > textarea").placeholder = "Id like a report to show my bike sales for the last month"
    document.querySelector("body > div:nth-child(26) > div > div > div.css-1bkr611-ModalBody.egkbfm10 > p.fl-text.css-sbsf6w-Text.e4p1v731").innerText = "Fine Tuning?"
    document.querySelector("body > div:nth-child(26) > div > div > div.css-1bkr611-ModalBody.egkbfm10 > div:nth-child(5) > textarea").placeholder = "Sales means Sales Total not Number of Sales"



}


function CleansetheUnholy(){


    try{document.querySelector("body > div:nth-child(26) > div > div > div.css-1ou1w9z-ModalFooter.eblor9z0 > div > button").remove()}catch{null}
    let zNode = document.createElement('div');
    zNode.innerHTML = '<button id="myButton" type="button">'+ 'Get Suggested Base Report </button>';
    zNode.setAttribute('id', 'myContainer');
    document.querySelector("body > div:nth-child(26) > div > div > div.css-1ou1w9z-ModalFooter.eblor9z0 > div").append(zNode);
    //--- Activate the newly added button.
    document.getElementById("myButton").addEventListener("click", Enginev2, false);


}


async function Enginev2(){
    document.querySelector("#myButton").disabled = true
    try{document.querySelector("#maintable").remove()}catch{null}
    box1 = document.querySelector("body > div:nth-child(26) > div > div > div.css-1bkr611-ModalBody.egkbfm10 > div:nth-child(3) > textarea").innerHTML
    box2 = document.querySelector("body > div:nth-child(26) > div > div > div.css-1bkr611-ModalBody.egkbfm10 > div:nth-child(5) > textarea").innerHTML
    console.log("Fire Base Request")
    await getBaseReport(box1,box2)
    getcutouts()
}



function getcutouts(){

    let LikelyBase = resp.indexOf("Most Likely Report")
    let Justification = resp.indexOf("Justification")
    let Override = resp.indexOf("Override")
    let Impossible = resp.indexOf("Impossible/Incomplete") // Used only to mark next segment
    
    LikelyBase = resp.substring(LikelyBase, Justification)
    Justification = resp.substring(Justification, Override)
    Override = resp.substring(Override, Impossible)
    LikelyBase = LikelyBase.split(":")[1]
    
    
    try{LikelyBase = LikelyBase.split(",")[0]}catch{try{LikelyBase = LikelyBase.split('"')[0]}catch{null}}
    
    
    
    
    let BackupBase = new String
    try{BackupBase = LikelyBase.split(":")[3]}
    catch{BackupBase = null}
    
    Justification = Justification.split(":")[1]
    Override = Override.split(":")[1]
    
    Base_LikelyBase = LikelyBase
    Base_BackupBase = BackupBase
    Base_Justify = Justification
    Base_Override = Override
    PushtoArray()
    
    }
    
    function PushtoArray(){
    DataArray = []
    DataArray.push(["Recommended Base" , Base_LikelyBase])
    DataArray.push(["Backup Base", Base_BackupBase])
    DataArray.push(["Justification", Base_Justify])
    DataArray.push(["Override", Base_Override])
    
    BuildTable(DataArray)
    
    }





    function BuildTable(array) {
        //setup our table array
        var tableArr = array
        //create a Table Object
        table = document.createElement('table');
        //iterate over every array(row) within tableArr
        for (let row of tableArr) {
            //Insert a new row element into the table element
            table.insertRow();
            //Iterate over every index(cell) in each array(row)
            for (let cell of row) {
                //While iterating over the index(cell)
                //insert a cell into the table element
                let newCell = table.rows[table.rows.length - 1].insertCell();
                //add text to the created cell element
                newCell.textContent = cell;
            }
        }
        table.style.border = "1px solid red"
        table.setAttribute("id", "maintable")
        document.querySelector("body > div:nth-child(26) > div > div > div.css-1bkr611-ModalBody.egkbfm10").appendChild(table);
    
    
        //Fires Part 2
        //Afterburner()
    }

async function getBaseReport(vaguerequest, finetune) {




        let openAiRequestPlusGuardRails = baseReportFindGuardRails + ". " + vaguerequest + ". " + finetune + ". " + finetune
    console.log(openAiRequestPlusGuardRails)
        let data = {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": openAiRequestPlusGuardRails}],
            "temperature": 0
        };
    
    
        var response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST", //
            cache: "no-cache",
            Authorization: apikey,
            contentType: 'application/json',
            n : 1,
            response_format : { "type": "json_object" },
            max_tokens : 600,
    
            headers: {
                "Content-Type": "application/json",
                "Authorization": apikey,
            },
            referrerPolicy: "no-referrer", 
            body: JSON.stringify(data), 
        }).then(response=>response.json()).then(data=>{resp = (data)});
        ;
    
    
        console.log(resp['choices'][0]['message']['content'])
        console.log("Total Token Usage: "+resp["usage"]["total_tokens"])
        resp = resp['choices'][0]['message']['content']
    
    }

    $("head").append(`
    <style>
        #maintable {
        font-family: "Lato",Helvetica,Arial,Verdana,sans-serif;
        border-spacing: 10px;
        border-collapse: collapse;
        box-sizing: border-box;
        padding: 5px 6px;
        font-size: .875rem;
        color: #000;
        text-align: left;
        border: 1px solid;
        td{
        border: 2px solid #000;
        background-color: #afdbd5;
        height: 25px;
        width: 200px;
        padding-left: 7px;
        padding-right: 7px;
        }
    </style>
`);

                                                                                       
  /* Praise the Omnissiah                                                                                     
                                           &&&&&&&&&&:                                    
                                        &&&&&&&&&&&&&&&&                               
                                        &&&&&&&&&&&&&&&&&&&&                           
                                      .&&&&&&&&&&&&&&&&&&&&&&&&                        
                                   ;&&&&   &&&&&&&&&&&&&&&&&&&&&&X                     
                         &&        X&&&&   &&&&&&&&&&&&&&&&&&&&&&&&&                   
                      &&&&&&:      &&&&&   &&&&&&&&&    $&&&&&&&&&&&&$                 
                    &&&&&&&&&&&&&&&&&&&&       +&&&       &&&&&&&&&&&&&                
                     &&&&&&&&&&&&&&&&&&&                 &&&&&&&&&&&&&&&&              
                      &&&&&&&&&&&&&&&&&&                X&&&&&&&&&&&&&&&&&             
                     &&&&&&&&&&&&+      &&&&&&x          X&&&&&&&&&&&&&&&&&            
            &&&&   &&&&&&&&&&&          &&&&&&&&&&         &&&&&&&&&&&&&&&&&           
           &&&&&&&&&&&&&&&&&            &&&&&&&&&&&&               &&&&&&&&&&          
          &&&&&&&&&&&&&&&&              &&&&&&&&&&&&&&              ;&&&&&&&&&         
         &&&&&&&&&&&&&&&&               &&&&&&&&&&&&&&&              &&&&&&&&&         
           ;&&&&&&&&&&&&                &&&&&&&&&&&&&&&+          &&&&&&&&&&&&&        
             &&&&&&&&&&&                &&&&&&&&&&&&&&&&         &&&&&&&&&&&&&&        
             &&&&&&&&&&&                &&&&&&&&&&&&&&&&          &&&&&&&&&&&&&&       
            +&&&&&&&&&&&                &&&&&&&&&&&&&&&&          &&&&&&&&&&&&&&       
       &&&&&&&&&&&&&&&&&                &&&&&&&&&&&&&&&            &&&&&&&&&&&&&       
      +&&&&&&&&&&&&&&&&&&               &&&&&&&&&&&&&&&                 &&&&&&&&;      
      x&&&&&&&&&&&&&&&&&&+              &&&&&&&&&&&&&&                  &&&&&&&&x      
      x&&&&&&&&&&&&&&&&&&&              &&&&&&&&&&&&&&                  &&&&&&&&;      
       &&&&&&&&&&&&&&&&&&&              &&&&&&&&&&&&&&             &&&&&&&&&&&&&       
            &&&&&&&&&&&&&   &&&&&+      &&&&&&X    &&&&           &&&&&&&&&&&&&&       
             &&&&&&&&&&&    &&&&&&&&&x  &&         &&&&:         .&&&&&&&&&&&&&&       
             X&&&&&&&&&&&    &&&&&&X    &&&&.     :&&&&          &&&&&&&&&&&&&&+       
            &&&&&&&&&&&&&$             & &&&&&&&&&&&&&           :&&&&&&&&&&&&&        
         &&&&&&&&&&&&&&&&&            && ;&&&&&&&&&&&+              +&&&&&&&&&$        
          &&&&&&&&&&&&&&&&&&  .&     x+.&;&&&&&&&&&&                x&&&&&&&&&         
           &&&&&&&&&&&&&&&&&&&&&        &&&&&&&&                   &&&&&&&&&&          
            &&&&+  &&&&&&&&&&&&         &&&&&&&&:          &&&&&X &&&&&&&&&&.          
                    .&&&&&&&&&&  .  .$ .&&x&&&&&&        +&&&&&&&&&&&&&&&&&            
                      &&&&&&&&&&&&&&&&&&                +&&&&&&&&&&&&&&&&&             
                     &&&&&&&&&&&&&&&&&&&                 $&&&&&&&&&&&&&&&              
                    &&&&&&&&&&&&&&&&&&&&       &&&+       &&&&&&&&&&&&&$               
                     &&&&&&&X      &&&&&   &&&&&&&&&    x&&&&&&&&&&&&&                 
                        .&&:       X&&&&   &&&&&&&&&&&&&&&&&&&&&&&&&                   
                                   X&&&&   &&&&&&&&&&&&&&&&&&&&&&&                     
                                     .+&&&&&&&&&&&&&&&&&&&&&&&&+                       
                                        &&&&&&&&&&&&&&&&&&&&X                          
                                        &&&&&&&&&&&&&&&&&                              
                                        &&&&&&&&&&&+                                   
                                                                                       
            Machine Spirit, accept my gift,

            Swallow the light, and spit out death.                                                                               
 */






if (window.top === window.self) {}else{






await timer(2000)
document.querySelector("#__next > div > div > div.css-1yeu6ln-Box-Flex.e1rqh3k81 > div.css-xkdgzs-Box-Flex.e1rqh3k81 > button > span > span").innerText = "Generate Report"
NewButton()

}
