function dateTime(){
    const d = new Date();

    let date= d.getDate();
    let month= d.getMonth() +1;
    let year= d.getFullYear();

    if(date<10){
        date='0'+ date;
    }
    if(month<10){
        month= `0${month}`;
    }
    let format= `${date}-${month}-${year}`;

    let hours = (d.getHours() < 10 ? '0' : '') +
                d.getHours();
    let minutes = (d.getMinutes() < 10 ? '0' : '') +
                d.getMinutes();

    let f = hours >= 12 ? 'PM' : 'AM';

    let time= `${hours}:${minutes} ${f}`;

    console.log(format+" "+time);
    console.log("Nivedita Desai");
    console.log("Enrollment no. 200420116007");
}
dateTime();
module.exports= dateTime;