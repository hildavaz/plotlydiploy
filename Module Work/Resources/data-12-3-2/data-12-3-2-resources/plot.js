
const url = "https://d3js.org/d3.v5.min.js";
d3.json("samples.json").then(function(data){
    console.log(data);
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
        null);
            console.log(filteredWfreq);
            firstPerson = data.metadata[0];
            Object.entries(firstPerson).forEach(([key, value]) =>
              {console.log(key + ': ' + value);});
});
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking',   
}; 
console.log(Object.entries(researcher1));



