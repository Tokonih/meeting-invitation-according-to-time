let select = document.getElementById('select')
let timing = 0;




select.onchange = function(){

    timing = parseInt(select.value)

    const setMeeting = new Promise ((resolve, reject) =>{
        let meetingDetails = {
            title: "salary increment",
            time: "9:00am",
            venue: "Board room",
            dressCode: "Black & white"
        };

        if (timing <= 9){
            resolve(meetingDetails);
            select.style.display= "none"
        }else{
            select.style.display= 'none'
            reject('sorry, you are not to attend the meeting becasue of the inappropriate time schedule')
        }
    
        if (timing <= 9){
            resolve(meetingDetails)
        }else{ 
            reject('sorry, you are not to attend the meeting becasue of the inappropriate time schedule')
        }
    });
    
    setMeeting.then((result) =>{
    let details = document.getElementById('details');
    let output = `
        <div>
            <h2> Meeting Details</h2>
            <h3>Title</h3>
            <p> ${result.title}<p/>
            <h3>Time</h3>
            <p>${result.time}<p/>
            <h3>Venue</h3>
            <p>${result.venue}<p/>
            <h3>Dress code</h3>
            <p>${result.dressCode}<p/>
        </div>
    `
    details.innerHTML= output
}).catch((error) =>{
    details.innerHTML = error
})

}