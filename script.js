// import sampleData from "./utils/data";

const sampleData=[
    {
      "id": "c0ac49c5-871e-4c72-a878-251de465e6b4",
      "type": "input",
      "label": "Sample Label",
      "placeholder": "Sample placeholder"
    },
    {
      "id": "146e69c2-1630-4a27-9d0b-f09e463a66e4",
      "type": "select",
      "label": "Sample Label",
      "options": ["Sample Option", "Sample Option", "Sample Option"]
    },
    {
      "id": "45002ecf-85cf-4852-bc46-529f94a758f5",
      "type": "input",
      "label": "Sample Label",
      "placeholder": "Sample Placeholder"
    },
    {
      "id": "680cff8d-c7f9-40be-8767-e3d6ba420952",
      "type": "textarea",
      "label": "Sample Label",
      "placeholder": "Sample Placeholder"
    }
  ];

let jsonData = sampleData;
let formElements = [];

const loadDefaultData = () => {
  jsonData.forEach((element) => {
    addElement(element.type, element);
  });
};

const addElement = (type, data = null) => {
  const id = data.id;
  const formDesigner = document.getElementById("main-form-cont");
  const div = document.createElement("div");
  div.classList.add("form-element");
  div.draggable = true;
  div.dataset.id = id;

  let html = `<button class="delete-button" onclick="deleteElement('${id}')">Delete</button>`;
  if (type == "input") {
    html += `
                <label>${data ? data.label : "Input Label"}</label>
                <input type="text" placeholder="${
                  data ? data.placeholder : "Input Placeholder"
                }">
            `;
  } else if (type == "select") {
    html += `
                <label>${data ? data.label : "Select Label"}</label>
                <select>
                    ${(data
                      ? data.options
                      : ["Option 1", "Option 2", "Option 3"]
                    )
                      .map((option) => `<option>${option}</option>`)
                      .join("")}
                </select>
            `;
  } else if (type == "textarea") {
    html += `
                <label>${data ? data.label : "Textarea Label"}</label>
                <textarea placeholder="${
                  data ? data.placeholder : "Textarea Placeholder"
                }"></textarea>
            `;
  }
  div.innerHTML = html;
  formDesigner.appendChild(div);
  formElements.push({ id, type });
};


document.addEventListener("DOMContentLoaded", loadDefaultData);
