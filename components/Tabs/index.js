// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//get dom container 
let tabContainer = document.querySelector(".topics");

//function createTab
function createTab(topic){
    let div = document.createElement("div");
    div.classList.add("tab");
    div.textContent = topic;
    return div;
}

//axios
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then (response => {
    let topics = response.data.topics;
    topics.unshift("all")
    topics.forEach(function(topic){
        tab = createTab(topic);
        tabContainer.appendChild(tab);
    });
})
.catch(error => {
    console.error(error)
  });