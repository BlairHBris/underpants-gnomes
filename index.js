const ol = document.querySelector("ol")
const li = document.querySelector("li")
const li1 = document.querySelector("#step-1")
const li2 = document.querySelector("#step-2")
const li3 = document.querySelector("#step-3")

function displayPlan() {
  const step1 = "Collect underpants."
  const step2 = "???"
  const step3 = "Profit!"
  if (li1.textContent == "") {
    li1.append(step1)
    li2.append(step2)
    li3.append(step3)
  } else {
    li1.textContent = ""
    li2.textContent = ""
    li3.textContent = ""
  }

}
