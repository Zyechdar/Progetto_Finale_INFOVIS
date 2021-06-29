Chart.defaults.global.tooltips.yAlign = 'bottom';

function selezionaStato(t, set, data){
    var elem1= document.getElementById('sx');
    var elem2= document.getElementById('dx');
    var elem3= document.getElementById('confronto');
   
    if(t.selezionato== "false"){
        if (set.stato1== null || set.stato2== null){
            t.selezionato= "true";
             if(set.stato1== null){
                set.stato1= t;
                d3.select('path.datamaps-subunit.'+msa).style("fill",'#00ad67')  //"#8f4574",  "#fed454",
       
            }
            else{
                if(set.stato2== null){
                    set.stato2= t
                    d3.select('path.datamaps-subunit.'+msa).style("fill", "#00ad67") //#00b3c6 azz #00ad67 verde
                }
            } 
        } 
    } 
    else{
        if(t.selezionato== "true") {
            t.selezionato= "false";
  
        }    
        if(set.stato1== t){
            set.stato1= null;
            resetColor(t);
        }
        else{
            set.stato2= null;
            resetColor(t);
        }
       
    }
    if (set.stato1!= null && set.stato2!= null){
        data1= set.stato1;
        data2= set.stato2;
        abilitaDoppio(elem3, data1, data2);
        disabilitaSingolo(elem1);
        disabilitaSingolo(elem2);
    }
    else{
        if((set.stato1== null && set.stato2!= null)||(set.stato1!= null && set.stato2== null)){
            if(set.stato1!=null){
                dati= set.stato1
            }
            else{
                if(set.stato2!=null){
                    dati= set.stato2
                }
            }
            abilitaSingolo(elem1, dati);
            abilitaSingolo(elem2, dati);
            disabilitaDoppio(elem3);
        }
    }   
    if(set.stato1== null && set.stato2== null){
            disabilitaSingolo(elem2);
            disabilitaSingolo(elem1);
        }
}     
  
function resetColor(t){
    if(t.fillKey=='Trump 36-50%'){
        d3.select('path.datamaps-subunit.'+msa).style("fill", "#CC4731")
    }
    if(t.fillKey=='Trump 26-35%'){
        d3.select('path.datamaps-subunit.'+msa).style("fill", "#d66b5a")
    }
    if(t.fillKey=='Trump 16-25%'){
        d3.select('path.datamaps-subunit.'+msa).style("fill", "#e5a398")
    }
    if(t.fillKey=='Trump 6-15%'){
        d3.select('path.datamaps-subunit.'+msa).style("fill", "#efc7c1")
    }
    if(t.fillKey=='Trump 1-5%'){
        d3.select('path.datamaps-subunit.'+msa).style("fill", "#F4DAD5")
    }
    if(t.fillKey=='Biden 1-5%'){
        d3.select('path.datamaps-subunit.'+msa).style("fill", "#D5E0EA")
    }
    if(t.fillKey=='Biden 6-10%'){
        d3.select('path.datamaps-subunit.'+msa).style("fill", "#acc1d5")
    }
    if(t.fillKey=='Biden 11-15%'){
        d3.select('path.datamaps-subunit.'+msa).style("fill", "#82A2C0")
    }
    if(t.fillKey=='Biden 16-20%'){
        d3.select('path.datamaps-subunit.'+msa).style("fill", "#5983AB")
    }
    if(t.fillKey=='Biden 21-25%'){
        d3.select('path.datamaps-subunit.'+msa).style("fill", "#306596")
    }           
} 
function abilitaSingolo(element, data){
    element.style.opacity = "1";
    element.style.filter = 'alpha(opacity=100)';
    element.disabled=false;
    d3.selectAll('.consensoElettorale')
    .on("click", function(){barreElettorali(data)});
    d3.selectAll('.grandiElettori')
    .on("click", function(){proiezionePunteggio(data)});
}

function abilitaDoppio(element, data1, data2){
    element.style.opacity = "1";
    element.style.filter = 'alpha(opacity=100)';
    element.disabled=false;
    d3.selectAll('.confrontoStati')
    .on("click", function(){confrontoElettorale(data1, data2)});
               
} 

function disabilitaSingolo(element){
   
    element.style.opacity = "0.5";
    element.style.filter = 'alpha(opacity=50)';
    element.disabled=true;
    d3.selectAll('.consensoElettorale')
    .on("click", null);
    d3.selectAll('.grandiElettori')
    .on("click", null);
} 

function disabilitaDoppio(element){

    element.style.opacity = "0.5";
    element.style.filter = 'alpha(opacity=50)';
    element.disabled=true;
    d3.selectAll('.confrontoStati')
    .on("click", null);

}            

function button(data) {
    var elem = document.getElementById('container');
    var elem2 = document.getElementById('home');
    var elem3 = document.getElementById('title');
    var elem4 = document.getElementById('dx');
    var elem5 = document.getElementById('sx');
    var elem6 = document.getElementById('confronto');
    var elem7 = document.getElementById('popChart');
    var elem8 = document.getElementById('chartContainer');
    var elem9 = document.getElementById('chartContainer2');
    var elem10 = document.getElementById('popChartConfronto');
    var elemt1 = document.getElementById('t1');
    var elemt2 = document.getElementById('t2');
    var elemt3 = document.getElementById('t3');
    
        elem.style.display = "block"; 
        elem3.style.display = "block";  
        elem5.style.display = "block";
        elem4.style.display = "block";
        elem6.style.display = "block";
        elem2.style.display = "none";
        
        if(elem7){
            
            remove(elem7)
            remove(elemt1)
        }
        if(elem8 && elem9){
           
           remove(elem8)
           remove(elem9)
           remove(elemt2)
        }
        if(elem10){
            
            remove(elem10)
            remove(elemt3)
        } 

    
} 

function barreElettorali(data) {
    var elem = document.getElementById('container');
    var elem2 = document.getElementById('home');
    var elem3 = document.getElementById('title');
    var elem4 = document.getElementById('dx');
    var elem5 = document.getElementById('sx');
    var elem6 = document.getElementById('confronto');
        
    elem.style.display = "none"; //no cartina
    elem3.style.display = "none"; //notitolo
    elem5.style.display = "none";
    elem4.style.display = "none";
    elem6.style.display = "none";
    if(!elem2){
        back()
        testoConsenso(data)
        istogramma(data.tweet, data.Name)
        
    }else{
        elem2.style.display = "block";
        testoConsenso(data)
        istogramma(data.tweet, data.Name)
    }
    
}

function testoConsenso(data){
    var h= document.createElement('h2');
    h.setAttribute('id','t1');
    
    var t = document.createTextNode("Consenso Elettorale: "+data.Name);
    h.appendChild(t);

    document.body.appendChild(h);  
}
function testoGrandi(data){
    var h= document.createElement('h2');
    h.setAttribute('id','t2');
    
    var t = document.createTextNode("Grandi Elettori: "+data.Name);
    h.appendChild(t);

    document.body.appendChild(h);  
}
function testoConfronto(data1,data2){
    var h= document.createElement('h2');
    h.setAttribute('id','t3');
    
    var t = document.createTextNode("Confronto tra: "+data1.Name + " e "+data2.Name);
    h.appendChild(t);

    document.body.appendChild(h);  
}
function proiezionePunteggio(data) {
    var elem = document.getElementById('container');
    var elem2 = document.getElementById('home');
    var elem3 = document.getElementById('title');
    var elem4 = document.getElementById('dx');
    var elem5 = document.getElementById('sx');
    var elem6 = document.getElementById('confronto');
        
    elem.style.display = "none"; //no cartina
    elem3.style.display = "none"; //notitolo
    elem5.style.display = "none";
    elem4.style.display = "none";
    elem6.style.display = "none";
    if(!elem2){
        back()
        testoGrandi(data)
        stackedbar(data)
        stackedbarTrump(data)
      
    }else{
        elem2.style.display = "block";
        testoGrandi(data)
        stackedbar(data)
        stackedbarTrump(data)
       
    }
}

function confrontoElettorale(data1,data2) {
    var elem = document.getElementById('container');
    var elem2 = document.getElementById('home');
    var elem3 = document.getElementById('title');
    var elem4 = document.getElementById('dx');
    var elem5 = document.getElementById('sx');
    var elem6 = document.getElementById('confronto');
        
    elem.style.display = "none"; //no cartina
    elem3.style.display = "none"; //notitolo
    elem5.style.display = "none";
    elem4.style.display = "none";
    elem6.style.display = "none";
    if(!elem2){
        back()
        testoConfronto(data1,data2)
        istogrammaConfronto(data1, data2)
    }else{
        elem2.style.display = "block";
        testoConfronto(data1,data2)
        istogrammaConfronto(data1, data2)
    }                  
}

function remove(elem) {
    
    elem.parentNode.removeChild(elem);
    return false;
}
      
function back(){
    var svg = d3.select('body')
        .append('svg')
        .attr('id', 'home')
        .attr('width', 50)
        .attr('height', 50)
        .attr("transform", 'translate(-630,10)');

     var image = svg.append('svg:image')
        .attr("xlink:href", "immagine/home.svg")
        // .attr("class", "back")
        // .attr("id", "back")
        .attr("locked", 0)
        .attr("width", 50)
        .attr("height", 50)
        .on("click", function(){button()});

}

function scrollDx(data){
    var svg = d3.select('body')
        .append('svg')
        .attr('id', 'dx')
        .attr("class", "grandiElettori")
        .attr('width', 150)
        .attr('height', 50)
        .attr("transform", 'translate(527,-480)');
        
     var image = svg.append('svg:image')
        .attr("xlink:href", "immagine/right.svg")
        .attr("locked", 0)
        .attr("width", 150)
        .attr("height", 50)
        .attr("orientation", 0)
        // .on("click", function(){scrollingDx(data)});
        var elem= document.getElementById('dx')
        disabilitaSingolo(elem);
}

function scrollSx(data){
    var svg = d3.select('body')
        .append('svg')
        .attr('id', 'sx')
        .attr("class", "consensoElettorale")
        .attr('width', 150)
        .attr('height', 50)
        .attr("transform", 'translate(526,-530)');
        
     var image = svg.append('svg:image')
        .attr("xlink:href", "immagine/left.svg")
        .attr("locked", 0)
        .attr("width", 150)
        .attr("height", 50)
        
        var elem= document.getElementById('sx')
        disabilitaSingolo(elem);
}
function confronto(data){
    var svg = d3.select('body')
    .append('svg')
    .attr('id', 'confronto')
    .attr("class", "confrontoStati")
    .attr('width', 180)
    .attr('height', 180)
    .attr("transform", 'translate(542,-430)');
    
    var image = svg.append('svg:image')
    .attr("xlink:href", "immagine/confronto.svg")
    .attr("locked", 0)
    .attr("width", 150)
    .attr("height", 50)
    .attr("orientation", 0)
    // .on("click", function(){button(data)});
    var elem= document.getElementById('confronto')
    disabilitaSingolo(elem);
    }

function istogramma(data, stato){

    var canvas = d3.select('body')
    .append('canvas')
    .attr('id', 'popChart')
    .attr('width', "500")
    .attr('height', "400")
   
    
    var popCanvas = document.getElementById("popChart");
    var barChart = new Chart(popCanvas, {
    type: 'bar',
    data: {
        labels: ['Consenso Elettorale'],
        datasets: [
          {
            label: 'Trump',
            data: [data[0]],
            backgroundColor: "#CC4731",
          },
          {
            label: 'Biden',
            data: [data[1]],
            backgroundColor: "#306596",
          },
          {
            label: 'Neutrale',
            data: [data[2]],
            backgroundColor: "#EDDC4E",
          }
        ]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: false,
        maintainAspectRatio: false,
        title: {
            display: true,
        }
      }
    });
}

function stackedbar(data){
        
    var canvas = d3.select('body')
        .append('canvas')
        .attr('id', 'chartContainer')
        .attr('width', "800") //1000
        .attr('height', "150")  //300

        
    var previsione = document.getElementById("chartContainer");  //chartContainer

    var max= 270;
    var valoreStato= data.peso;
    var punteggio= 154;
    var elettMancanti = max-punteggio-valoreStato;

    if(data.fillKey=='Biden 1-5%' || data.fillKey=='Biden 6-10%' || data.fillKey=='Biden 11-15%' || data.fillKey=='Biden 16-20%' ||data.fillKey=='Biden 21-25%'){
            punteggio=154-valoreStato
            elettMancanti=max-154
    }


    var myChart = new Chart(previsione, {

      type: 'horizontalBar',

      data: {
        
        labels: ['Biden'],
        datasets: [
          {
            label: 'Grandi elettori acquisiti',
            data: [punteggio],
            backgroundColor: "#306596",
          },
          {
            label: 'Grandi elettori ottenibili',
            data: [valoreStato],
            backgroundColor: "#EDDC4E",
          },
          {
            label: 'Grandi elettori mancanti',
            data: [elettMancanti],
            backgroundColor: '#848484',
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        title: {
            display: true,
            
        },
        scales: {
          xAxes: [{ stacked: true,
                    ticks:{
                        max:270
                    }
                 }],
          yAxes: [{ stacked: true }]
        }
      }
    });
}

function stackedbarTrump(data){
        
    var canvas2 = d3.select('body')
        .append('canvas')
        .attr('id', 'chartContainer2')
        .attr('width', "800") //1000
        .attr('height', "150")  //300

    

    var prev = document.getElementById("chartContainer2");  //chartContainer

    var max= 270;
    var valoreStato= data.peso;

    var punteggioT= 240;
    var elettMancanti = max-punteggioT-valoreStato;

    if(data.fillKey=='Trump 36-50%' || data.fillKey=='Trump 26-35%' || data.fillKey=='Trump 16-25%' || data.fillKey=='Trump 6-15%' ||data.fillKey=='Trump 1-5%'){
        punteggioT=240-valoreStato
        elettMancanti=max-240
    };
  
    if(punteggioT+valoreStato>270){
        valoreStato = 270-punteggioT
    };

    var myChart2 = new Chart(prev, {

      type: 'horizontalBar',

      data: {
        
        labels: ['Trump'],
        datasets: [
          {
            label: 'Grandi elettori acquisiti',
            data: [punteggioT],
            backgroundColor: "#CC4731",
          },
          {
            label: 'Grandi elettori ottenibili',
            data: [valoreStato],
            backgroundColor: "#EDDC4E",
          },
          {
            label: 'Grandi elettori mancanti',
            data: [elettMancanti],
            backgroundColor: '#848484',
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{ stacked: true,
                    ticks:{
                        max:270
                    }
                 }],
          yAxes: [{ stacked: true }]
        },
    
        title: {
            display: true, 
        },
        
      }
    });
}


function istogrammaConfronto(data1, data2){

    var canvas = d3.select('body')
    .append('canvas')
    .attr('id', 'popChartConfronto')
    .attr('width', "650")
    .attr('height', "400")
    

    var popCanvas = document.getElementById("popChartConfronto");
    
    const diff1 = data1.tweet[1]-data1.tweet[0]
    const diff2 = data2.tweet[1]-data2.tweet[0]

    const dati1 = [data1.peso,data1.tweet[2],diff1]
    const dati2=[data2.peso, data2.tweet[2],diff2]  

    const mancante1= 50-data1.tweet[1]
    const mancante2= 50-data2.tweet[1]
    const target1 = [undefined, mancante1, undefined];
    const target2 = [undefined, mancante2,undefined];

    var barChart = new Chart(popCanvas, {
      type: "bar",
      data: {
       labels: ['Grandi elettori', '% Neutrali', 'Differenza Biden-Trump'],
        datasets: [
          {
            label: "Per vincere "+data1.Name,
            backgroundColor: '#cc5600',
            data: target1.map(v => [v - 0.5, v + 0.5]),
            xAxisID: "x-axis-target"
          },
          {
            label: "Per vincere "+data2.Name,
            backgroundColor: '#7299df',
            data: target2.map(v => [v - 0.5, v + 0.5]),
            xAxisID: "x-axis-target"
          },{
            label: data1.Name,
            backgroundColor: "#fed454",
            data: dati1,
            xAxisID: "x-axis-actual"
          },
          {
            label: data2.Name,
            backgroundColor: "#8f4574",
            data: dati2,
            xAxisID: "x-axis-actual"
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => {
              const v = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              return Array.isArray(v) ? (v[1] + v[0]) / 2 : v;
            }
          }
        },
        scales: {
          xAxes: [{
              id: "x-axis-target",
              stacked: false
            },
            {
              display: false,
              offset: true,
              stacked: false,
              id: "x-axis-actual",
              gridLines: {
                offsetGridLines: true
              }
            }
          ],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
}

function main(){
   
    scrollSx();   
    scrollDx();
    confronto();

  var map = new Datamap({
        element: document.getElementById('container'),
        scope: 'usa',          
        
        geographyConfig: {

             borderColor: '#708090',
                highlightOnHover: false,
                popupOnHover: true,
                //highlightBorderColor: '#000000',
                highlightFillColor: function(geo) {
                         return geo['fillColor']  || '#AARRGGBB';
                           
                }, 
                 
            popupTemplate: function(geography, data) {
                
                return '<div class="hoverinfo">'  + geography.properties.name + '<br> Grandi elettori: ' + data.peso +
                 '<br> Candidato favorito: '+ data.fillKey + ' '
            
            },
            
               
        },
        width: 1000,
        height: 450, 

        done: function(datamap){
                var stato1= null;
                var stato2= null;
                var set= {stato1: stato1, stato2: stato2}
                var svg = datamap.svg;
                svg.selectAll('.datamaps-subunit').on('click', function(d) {
                msa = d3.select(this).attr('class').replace('datamaps-subunit ', '');
                data = d3.select(this).attr('data-info');
                t = datamap.options.data[msa];            

                selezionaStato(t, set, data);        
                     

            });
        },
              
        fills: {
            'Trump 36-50%': '#CC4731',  //36 50 trump++
            'Trump 26-35%': '#d66b5a',   //26 35 trump +
            'Trump 16-25%': '#e5a398',   //16 25 trump 
            'Trump 6-15%': '#efc7c1',  //6 15    trump-
            'Trump 1-5%': '#F4DAD5',//1  5  Trump 1-5%
            'Biden 1-5%': '#D5E0EA',//-1 -5
            'Biden 6-10%': '#acc1d5',  //-6  -10  biden -
            'Biden 11-15%': '#82A2C0',   //-11 -15 biden
            'Biden 16-20%': '#5983AB',  //-16 -20 biden +
            'Biden 21-25%': '#306596',  //-21 -25 biden ++ 
            defaultFill: 'green'
        },

       data:{
            "AZ": {
                "Name": "Arizona",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 5,
                "tweet": [41, 23, 36],
                "peso" : 11,   
                "selezionato": "false"
                
                 
            },
            "CO": {
                "Name": "Colorado",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 5,
                "tweet": [37, 35, 28],
                "peso" : 10,
                "selezionato": "false"
                
            },
            "DE": {
                "Name": "Delaware",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [54, 33, 13],
                "peso" : 3,
                "selezionato": "false"
                
            },
            "FL": {
                "Name": "Florida",
                "fillKey": "Trump 6-15%",
                "electoralVotes": 29,
                "tweet": [46, 35, 19],
                "peso" : 30,
                "selezionato": "false"
                
            },
            "GA": {
                "Name": "Georgia",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [37, 20, 43],
                "peso" : 16,
                "selezionato": "false"
                 
            },
            "HI": {
                "Name": "Hawaii",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [41, 22, 37],
                "peso" : 4,
                "selezionato": "false"
                
            },
            "ID": {
                "Name": "Idaho",
                "fillKey": "Trump 6-15%",
                "electoralVotes": 32,
                "tweet": [36, 27, 37],
                "peso" : 4,
                "selezionato": "false"
            
            },
            "IL": {
                "Name": "Illinois",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [40, 16, 44],
                "peso" : 19, 
                "selezionato": "false"
                
            },
            "IN": {
                "Name": "Indiana",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 11,
                "tweet": [45, 20, 35],
                "peso" : 11,
                "selezionato": "false"
                 
            },
            "IA": {
                "Name": "Iowa",
                "fillKey": "Biden 21-25%",
                "electoralVotes": 11,
                "tweet": [27, 52, 21],
                "peso" : 6,
                "selezionato": "false"
                
            },
            "KS": {
                "Name": "Kansas",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [36, 20, 44],
                "peso" : 6,
                "selezionato": "false"
                 
            },
            "KY": {
                "Name": "Kentucky",
                "fillKey": "Trump 36-50%",
                "electoralVotes": 32,
                "tweet": [64, 18, 18],
                "peso" : 8,
                "selezionato": "false"
                
            },
            "LA": {
                "Name": "Louisiana",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [43, 23, 34],
                "peso" : 8,
                "selezionato": "false"
                
            },
            "MD": {
                "Name": "Maryland",
                "fillKey": "Trump 6-15%",
                "electoralVotes": 32,
                "tweet": [35, 27, 38],
                "peso" : 13,
                "selezionato": "false" 
            
    
            },
            "ME": {
                "Name": "Maine",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 32,
                "tweet": [24, 23, 53],
                "peso" : 4,
                "selezionato": "false"
                
            },
            "MA": {
                "Name": "Massachusetts",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 32,
                "tweet": [45, 42, 13],
                "peso" : 11,
                "selezionato": "false"
                
            },
            "MN": {
                "Name": "Minnesota",
                "fillKey": "Biden 6-10%",
                "electoralVotes": 32,
                "tweet": [35, 41, 24],
                "peso" : 10,
                "selezionato": "false" 
                
            },
            "MI": {
                "Name": "Michigan",
                "fillKey": "Biden 6-10%",
                "electoralVotes": 32,
                "tweet": [33, 40, 27],
                "peso" : 15,
                "selezionato": "false"
                
            },
            "MS": {
                "Name": "Mississippi",
                "fillKey": "Biden 6-10%",
                "electoralVotes": 32,
                "tweet": [31, 40, 29],
                "peso" : 6,
                "selezionato": "false"
                
            },
            "MO": {
                "Name": "Missouri",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 13,
                "tweet": [35, 33, 32],
                "peso" : 10,
                "selezionato": "false"
                
            },
            "MT": {
                "Name": "Montana",
                "fillKey": "Biden 6-10%",
                "electoralVotes": 32,
                "tweet": [18, 25, 57],
                "peso" : 4,
                "selezionato": "false"
                
            },
            "NC": {
                "Name": "North Carolina",
                "fillKey": "Biden 1-5%",
                "electoralVotes": 32,
                "tweet": [37, 41, 22],
                "peso" : 16,
                "selezionato": "false" 
                
            },
            "NE": {
                "Name": "Nebraska",
                "fillKey": "Trump 26-35%",
                "electoralVotes": 32,
                "tweet": [53, 24, 23],
                "peso" : 5,
                "selezionato": "false"
                
            },
            "NV": {
                "Name": "Nevada",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 32,
                "tweet": [25, 22, 53],
                "peso" : 6,
                "selezionato": "false" 
                
            },
            "NH": {
                "Name": "New Hampshire",
                "fillKey": "Trump 6-15%",
                "electoralVotes": 32,
                "tweet": [42, 33, 25],
                "peso" : 4,
                "selezionato": "false"
                 
            },
            "NJ": {
                "Name": "New Jersey",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 32,
                "tweet": [38, 35, 27],
                "peso" : 14,
                "selezionato": "false" 
                
            },
            "NY": {
                "Name": "New York",
                "fillKey": "Biden 6-10%",
                "electoralVotes": 32,
                "tweet": [41, 49, 10],
                "peso" : 28,
                "selezionato": "false"
                 
            },
            "ND": {
                "Name": "North Dakota",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [39, 23, 38],
                "peso" : 3,
                "selezionato": "false"
                 
            },
            "NM": {
                "Name": "New Mexico",
                "fillKey": "Biden 6-10%",
                "electoralVotes": 32,
                "tweet": [23, 30, 47],
                "peso" : 5,
                "selezionato": "false" 
                
            },
            "OH": {
                "Name": "Ohio",
                "fillKey": "Biden 11-15%",
                "electoralVotes": 32,
                "tweet": [37, 50, 13],
                "peso" : 17,
                "selezionato": "false"
                
            },
            "OK": {
                "Name": "Oklahoma",
                "fillKey": "Trump 36-50%",
                "electoralVotes": 32,
                "tweet": [48, 6, 46],
                "peso" : 7,
                "selezionato": "false" 
                
            },
            "OR": {
                "Name": "Oregon",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [44, 21, 35],
                "peso" : 8,
                "selezionato": "false"
                
            },
            "PA": {
                "Name": "Pennsylvania",
                "fillKey": "Trump 6-15%",
                "electoralVotes": 32,
                "tweet": [44, 35, 21],
                "peso" : 19,
                "selezionato": "false"
                
            },
            "RI": {
                "Name": "Rhode Island",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 32,
                "tweet": [35, 31, 34],
                "peso" : 4,
                "selezionato": "false"
                
            },
            "SC": {
                "Name": "South Carolina",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [42, 25, 33],
                "peso" : 9,
                "selezionato": "false"
                
            },
            "SD": {
                "Name": "South Dakota",
                "fillKey": "Trump 6-15%",
                "electoralVotes": 32,
                "tweet": [37, 26, 37],
                "peso" : 3,
                "selezionato": "false"
                
            },
            "TN": {
                "Name": "Tennessee",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [50, 33, 17],
                "peso" : 11,
                "selezionato": "false" 
                
            },
            "TX": {
                "Name": "Texas",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 32,
                "tweet": [36, 33, 31],
                "peso" : 40,
                "selezionato": "false"
                
            },
            "UT": {
                "Name": "Utah",
                "fillKey": "Biden 6-10%",
                "electoralVotes": 32,
                "tweet": [32, 40, 28],
                "peso" : 6,
                "selezionato": "false" 
                
            },
            "WI": {
                "Name": "Wisconsin",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 32,
                "tweet": [35, 31, 34],
                "peso" : 10,
                "selezionato": "false" 
                
            },
            "VA": {
                "Name": "Virginia",
                "fillKey": "Trump 16-25%",
                "electoralVotes": 32,
                "tweet": [40, 23, 37],
                "peso" : 13,
                "selezionato": "false" 
                
            }, 
            "VT": {
                "Name": "Vermont",
                "fillKey": "Biden 6-10%",
                "electoralVotes": 32,
                "tweet": [45, 54, 1],
                "peso" : 3,
                "selezionato": "false"
                
            },
            "WA": {
                "Name": "Washington",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 32,
                "tweet": [38, 36, 26],
                "peso" : 12,
                "selezionato": "false"
                
            },
            "WV": {
                "Name": "West Virginia",
                "fillKey": "Trump 36-50%",
                "electoralVotes": 32,
                "tweet": [58, 22, 20],
                "peso" : 4,
                "selezionato": "false"
                

            },
            "WY": {
                "Name": "Wyoming",
                "fillKey": "Trump 36-50%",
                "electoralVotes": 32,
                "tweet": [58, 18, 24],
                "peso" : 3,
                "selezionato": "false" 
                
            },
            "CA": {
                "Name": "California",
                "fillKey": "Biden 11-15%",
                "electoralVotes": 32,
                "tweet": [42, 55, 3],
                "peso" : 54,
                "selezionato": "false"
                
            },
            "CT": {
                "Name": "Connecticut",
                "fillKey": "Trump 1-5%",
                "electoralVotes": 32,
                "tweet": [29, 25, 46],
                "peso" : 7,
                "selezionato": "false"
                
            },
            "AK": {
                "Name": "Alaska",
                "fillKey": "Trump 6-15%",
                "electoralVotes": 32,
                "tweet": [33, 20, 47],
                "peso" : 3,
                "selezionato": "false" 
                
            },
            "AR": {
                "Name": "Arkansas",
                "fillKey": "Trump 6-15%",
                "electoralVotes": 32,
                "tweet": [37, 25, 38],
                "peso" : 6,
                "selezionato": "false" 
                
    
            },
            "AL": {
                "Name": "Alabama",
                "fillKey": "Trump 26-35%",
                "electoralVotes": 32,
                "tweet": [43, 10, 47],
                "peso" : 9,
                "selezionato": "false" 
                
            }
          },
    });
    
    map.labels();
    map.legend();
    
}