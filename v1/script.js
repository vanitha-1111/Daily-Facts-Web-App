//console.log("Hello world!");
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
const CATEGORIES = [
  { name: "Technology", color: "#3b82f6" },
  { name: "Science", color: "#16a34a" },
  { name: "Finance", color: "#ef4444" },
  { name: "Society", color: "#eab308" },
  { name: "Entertainment", color: "#db2777" },
  { name: "Health", color: "#14b8a6" },
  { name: "History", color: "#f97316" },
  { name: "News", color: "#8b5cf6" },
];

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = ""; //removing all the inner html written facts so that we can now create it dynamically using database.

//Load data from superbase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://xkgiskqnozwzfumrnkkr.supabase.co/rest/v1/fact",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ2lza3Fub3p3emZ1bXJua2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjg2OTksImV4cCI6MjA2Mzg0NDY5OX0.eHHmL9sJygtgO8SAjoSekSmkXIxZXswteBHgZEBleEI",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ2lza3Fub3p3emZ1bXJua2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjg2OTksImV4cCI6MjA2Mzg0NDY5OX0.eHHmL9sJygtgO8SAjoSekSmkXIxZXswteBHgZEBleEI",
      },
    }
  );
  const data = await res.json();
  //console.log(data);
  createFacts(data);
}

//createFacts(initialFacts);

function createFacts(dataArray) {
  const htmlarr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
      class="source"
      href="${fact.source}"
      target="blank"
      >Source</a>
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((cat) => cat.name === fact.category).color
      }">${fact.category}</span>
  </li>`
  );
  console.log(htmlarr);
  const html = htmlarr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

/*const htmlarr = initialFacts.map(
  (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
      class="source"
      href="${fact.source}"
      target="blank"
      >Source</a>
      </p>
      <span class="tag" style="background-color: blue">${fact.category}</span>
  </li>`
);
console.log(htmlarr);
const html = htmlarr.join("");
factsList.insertAdjacentHTML("afterbegin", html);*/

//Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

//Dynamically creating DOM elements and loading data from superbase
