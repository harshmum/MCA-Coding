//  // Spread

//  // Spread:-
//  // Packet of chocolates

// //  let arr = [1,2,3,4,5]

// //  console.log(...arr)

// //combining

// // let arr = [1,2,3,4,5]
// // let arr2 = [6,7,8,9]

// // let newArray = [...arr, ...arr2]
// // console.log(newArray);


// // Rest

// // Box1 Box2 Box3 Box4

// // Eg: I will take this box and "rest" is yours.

// // You: Box1
// // Brother: Box2 Box3 Box4


// function fun(a, c,...b){
//     console.log(a);
//     console.log(c);
//     console.log(b);
// }

// fun("box1", "Box2", "Box3", "Box4")


const api_key = "AIzaSyCQvpLsH326NBcqULUxEhP5tzz4cGPBEwk"


// youtube:-
// URL
// fetch()

// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=barbie&key=[YOUR_API_KEY]


let search = async () => {
    try{

        let query = document.getElementById('query').value
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
        let response = await fetch(url);
        
        let data = await response.json();
        console.log(data.items)
    }
    catch(error) {
        console.log(error);
    }
};

//append

let append= (data)=> {
    let container= document.getElementById('result');
    // data.froeach{{el}} =>{el.id.videoId/ el.snippet.title}
    data.forEach(({id:{ videoId }, snippet: {channelTitle}})=> {
        let div = document.createElement('div');
        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;

        let h3 = document.createElement('h3');
        h3.innerText = channelTitle;

        div.append(iframe, h3);

        container.append(div);

    });
};

/* <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/ZIMjIP78aMY" //video ID(ZIMjIP78aMY)
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; 
    autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
