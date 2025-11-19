const root = document.getElementById("root");

const section = document.createElement("section");
section.classList.add("wrapper");

const title = document.createElement("h1");
title.textContent = "gaming tournament entry form";

const subtitle = document.createElement("p");
subtitle.textContent =
  "Register your players and the titles your team will participate in.";

const form = document.createElement("form");
const teamName = document.createElement("fieldset");
const teamNameLegend = document.createElement("legend");
teamNameLegend.textContent = "Team name";
const teamNameInput = document.createElement("input");
teamNameInput.classList.add("full");
teamNameInput.setAttribute('name', 'teamName')


const teamCoach = document.createElement("fieldset");
const teamCoachLegend = document.createElement("legend");
teamCoachLegend.textContent = "Team coach";
const teamCoachInputFirst = document.createElement("input");
teamCoachInputFirst.setAttribute("placeholder", "First");
const teamCoachInputSecond = document.createElement("input");
teamCoachInputSecond.setAttribute("placeholder", "Last");
teamCoach.classList.add("flex");

const country = document.createElement("fieldset");
const countryLegend = document.createElement("legend");
countryLegend.textContent = "Country of origin";

const countrySelect = document.createElement("select");
countrySelect.classList.add("full");

const countries = ["Ukraine", "Poland", "France"];
countries.forEach((country) => {
  const opt = document.createElement("option");

  opt.value = country;
  opt.textContent = country;
  countrySelect.append(opt);
});

const button = document.createElement('button');
button.textContent = 'Submit Form';
button.classList.add('btn')
button.type = 'submit'


country.append(countryLegend, countrySelect);
teamCoach.append(teamCoachLegend, teamCoachInputFirst, teamCoachInputSecond);
teamName.append(teamNameLegend, teamNameInput);
form.append(teamName, teamCoach, country, button);
section.append(title, subtitle, form);
root.append(section);
